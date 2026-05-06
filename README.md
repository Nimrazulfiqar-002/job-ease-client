# joBeASE AI — Project Plan

## Features
- User registration and login (JWT auth)
- Manual resume builder form
- AI resume improvement suggestions
- Auto resume generator from job description
- Job role recommender
- Resume storage and history
- Resume preview and download

## Tech Stack
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB Atlas
- AI: GeminiAI  API


##Modules

Module 1: Auth
  - register new user
  - login existing user
  - protect private routes

Module 2: Resume Builder
  - form to enter name, skills, experience
  - save resume to database

Module 3: AI Suggestions
  - send resume to GeminiAI
  - get improvement suggestions back
  - show suggestions in UI

Module 4: Auto Generator
  - user pastes job description
  - AI creates a resume automatically

Module 5: Job Recommender
  - match resume skills to job roles
  - display matching roles to user
## Architecture
!['systemDiagram'](https://github.com/Nimrazulfiqar-002/job-ease-client/blob/8e2a83741606d9210e16467362fe957ebe01bc94/jobEase-systemDiagram.png)
