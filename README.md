# GitHub Assignment Project

This project is a React + TypeScript application built with Vite. It fetches and displays GitHub repositories and their details using the GitHub API. The app includes features like repository listings, detailed views of repositories, and commit history.

## Features

- **Home Page**: Displays a list of repositories for a default GitHub user.
- **Repository Details**: View detailed information about a repository, including the last 5 commits.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.
- **React Query**: Efficient data fetching and caching with `@tanstack/react-query`.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Vite**: Fast development environment and build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For navigation and routing.
- **React Query**: For data fetching and state management.

## Setup

1. Clone the repository:  
   `git clone <repository-url> && cd GitHubAssignmentProject`

2. Install dependencies:  
   `npm install`

3. Start the development server:  
   `npm run dev`

4. Open the app in your browser at:  
   `http://localhost:5173`

## Scripts

- `npm run dev`: Start the development server  
- `npm run build`: Build the project for production  
- `npm run preview`: Preview the production build  
- `npm run test`: Run unit tests with Vitest  
- `npm run lint`: Lint the codebase with ESLint  

## Environment Variables

Create a `.env` file in the root directory with the following variables:

Example:  
`VITE_GITHUB_TOKEN=your_personal_access_token`

## Testing

The project uses `@testing-library/react` and `vitest` for unit testing.  
To run the tests: `npm run test`
