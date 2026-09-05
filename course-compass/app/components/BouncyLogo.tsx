"use client";

import {
  useRef,
  useEffect,
  useCallback,
  type PointerEvent,
} from "react";
import Image from "next/image";
import icon from "@/public/owls/owl_icon.svg";

const BALL_SIZE = 48;
const GRAVITY = 0.6;
const WALL_DAMPING = 0.72;
const AIR_FRICTION = 0.998;
const REST_THRESHOLD = 0.3;

export function BouncyLogo() {
  const ballRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const pos = useRef({ x: 40, y: 40 });
  const vel = useRef({ x: 2, y: 0 });

  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const pointerHistory = useRef<
    { x: number; y: number; t: number }[]
  >([]);

  const rafId = useRef<number | null>(null);

  const applyTransform = useCallback(() => {
    if (ballRef.current) {
      ballRef.current.style.transform = `translate(
        ${pos.current.x}px,
        ${pos.current.y}px
      )`;
    }
  }, []);

  const getBounds = useCallback(() => {
    const el = containerRef.current;

    if (!el) {
      return { width: 0, height: 0 };
    }

    const rect = el.getBoundingClientRect();

    return {
      width: rect.width,
      height: rect.height,
    };
  }, []);

  const tick = useCallback(() => {
    if (!dragging.current) {
      const { width, height } = getBounds();

      const maxX = Math.max(0, width - BALL_SIZE);
      const maxY = Math.max(0, height - BALL_SIZE);

      vel.current.y += GRAVITY;
      vel.current.x *= AIR_FRICTION;

      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      // Left wall
      if (pos.current.x <= 0) {
        pos.current.x = 0;
        vel.current.x =
          Math.abs(vel.current.x) * WALL_DAMPING;
      }

      // Right wall
      else if (pos.current.x >= maxX) {
        pos.current.x = maxX;
        vel.current.x =
          -Math.abs(vel.current.x) * WALL_DAMPING;
      }

      // Top wall
      if (pos.current.y <= 0) {
        pos.current.y = 0;
        vel.current.y =
          Math.abs(vel.current.y) * WALL_DAMPING;
      }

      // Bottom wall
      else if (pos.current.y >= maxY) {
        pos.current.y = maxY;
        vel.current.y =
          -Math.abs(vel.current.y) * WALL_DAMPING;

        if (Math.abs(vel.current.y) < REST_THRESHOLD) {
          vel.current.y = 0;
          vel.current.x *= 0.9;
        }
      }

      applyTransform();
    }

    rafId.current = requestAnimationFrame(tick);
  }, [applyTransform, getBounds]);

  useEffect(() => {
    // Find the footer element.
    containerRef.current =
      ballRef.current?.parentElement ?? null;

    applyTransform();

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [applyTransform, tick]);

  function handlePointerDown(
    e: PointerEvent<HTMLDivElement>
  ) {
    if (!ballRef.current) return;

    dragging.current = true;
    vel.current = { x: 0, y: 0 };
    pointerHistory.current = [];

    const ballRect =
      ballRef.current.getBoundingClientRect();

    dragOffset.current = {
      x: e.clientX - ballRect.left,
      y: e.clientY - ballRect.top,
    };

    ballRef.current.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(
    e: PointerEvent<HTMLDivElement>
  ) {
    if (!dragging.current || !containerRef.current) {
      return;
    }

    const containerRect =
      containerRef.current.getBoundingClientRect();

    const { width, height } = getBounds();

    const maxX = Math.max(0, width - BALL_SIZE);
    const maxY = Math.max(0, height - BALL_SIZE);

    let x =
      e.clientX -
      containerRect.left -
      dragOffset.current.x;

    let y =
      e.clientY -
      containerRect.top -
      dragOffset.current.y;

    x = Math.max(0, Math.min(maxX, x));
    y = Math.max(0, Math.min(maxY, y));

    pos.current = { x, y };

    applyTransform();

    const now = performance.now();

    pointerHistory.current.push({
      x,
      y,
      t: now,
    });

    if (pointerHistory.current.length > 5) {
      pointerHistory.current.shift();
    }
  }

  function handlePointerUp(
    e: PointerEvent<HTMLDivElement>
  ) {
    if (!dragging.current) return;

    dragging.current = false;

    const history = pointerHistory.current;

    if (history.length >= 2) {
      const first = history[0];
      const last = history[history.length - 1];

      const dt = Math.max(last.t - first.t, 1);

      const rawVx =
        ((last.x - first.x) / dt) * 16;

      const rawVy =
        ((last.y - first.y) / dt) * 16;

      vel.current = {
        x: Math.max(-25, Math.min(25, rawVx)),
        y: Math.max(-25, Math.min(25, rawVy)),
      };
    } else {
      vel.current = { x: 0, y: 0 };
    }

    ballRef.current?.releasePointerCapture(
      e.pointerId
    );
  }

  return (
    <div
      ref={ballRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="absolute left-0 top-0 z-30 cursor-grab touch-none select-none active:cursor-grabbing"
      style={{
        width: BALL_SIZE,
        height: BALL_SIZE,
      }}
    >
      <Image
        src={icon}
        alt=""
        width={BALL_SIZE}
        height={BALL_SIZE}
        draggable={false}
        className="pointer-events-none h-full w-full drop-shadow-md"
      />
    </div>
  );
}
