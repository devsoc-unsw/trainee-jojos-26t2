# Course Compass

The friendly UNSW course finder for your needs!

## Getting Started

Our monorepo project has both frontend and backend. Backend is stored in `app/api/`. 

To setup, go into `course-compass/` and run `npm i`. 

To start local development, run `npm run dev`.

## Working around the project

 - `public/` - public resources
 - `app/` - frontend & backend combined
   - `about/` - about page
   - `api/` - routes
   - `components/` - commonly used components across pages
   - `courses/` - browse courses page
   - `quiz/` - quiz page
   - `results/` - results page after quiz
 - `courseInfoScripts/` - scraped data about courses from UNSW Handbook, Unilectives, & studentvip
 - `lib/` - stuff for course data...
