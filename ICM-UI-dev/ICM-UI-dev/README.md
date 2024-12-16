# Incentive Compensation Management (ICM) Tool - Frontend

## Overview  
The **Incentive Compensation Management (ICM) Tool** is a web-based application designed to streamline and automate the calculation, reporting, and management of employee incentives and commissions. Built with **ReactJS**, this frontend application provides an intuitive and dynamic user experience.

## Table of Contents  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Available Scripts](#available-scripts) 
- [Best Practices](#best-practices) 

---

## Features  
- **Compensation Dashboard**: Visualize employee performance and incentives in charts and tables.  
- **Dynamic Calculation Engine**: Automated real-time calculation of incentives.  
- **Role-based Access**: Different views for employees, managers, and admins.  
- **Analytics & Reports**: Exportable incentive reports in PDF and Excel formats.  
- **Responsive UI**: Works seamlessly across devices.  
- **Notifications & Alerts**: Users get real-time updates about incentives or changes.  

---

## Tech Stack  
- **Frontend**: React JS  
- **State Management**:   
- **UI Library**: Ant Design   
- **API Integration**: React Query  
- **Version Control**: Git  

---

## Installation  

### Prerequisites  
1. Make sure you have the following installed:  
   - **Node.js** (>=18.x)  
   - **npm**   

2. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/pharma-ace-git/ICM-UI.git
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the local environment:

   ```bash
   npm start
   ```

---

## Usage  
Once the application is running, navigate to `http://localhost:8080` in your browser. You can log in with your credentials to access the dashboard and other features.

---

## Folder Structure  
```plaintext
icm-ui/
├── public/                  # Static assets (icons, images, logos)
├── src/
│   ├── assets/              # Application-specific assets
│   ├── components/          # Reusable components
│   │   └── Button/
│   │       ├── Button.test.ts     # Unit tests for Button component
│   │       ├── Button.tsx         # Button component implementation
│   │       └── Button.types.ts    # Types for Button component
│   ├── pages/               # Application pages for routing
│   ├── context/             # React Contexts for global state
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.ts          # Hook for authentication logic
│   │   └── useFetch.ts         # Hook for fetching data
│   ├── services/            # API calls and utility functions
│   │   ├── api/             # General API functions
│   │   │   ├── userService.ts  # User-related API functions
│   │   │   └── productService.ts # Product-related API functions
│   │   ├── auth/            # Authentication services
│   │   └── notifications/    # Services for notifications
│   ├── styles/              # Global and component-specific styles
│   ├── types/               # TypeScript types and interfaces
│   │   ├── userTypes.ts      # User-related types
│   │   ├── productTypes.ts   # Product-related types
│   │   └── index.ts         # Central export for types
│   ├── constants/           # Static data (e.g., constant variables)
│   ├── routes/              # Route configurations
│   │   ├── index.ts         # Entry point for routes (combines all routes)
│   │   ├── authRoutes.ts    # Authenticated routes
│   │   └── publicRoutes.ts  # Unauthenticated routes
│   └── index.tsx            # Application entry point
├── tests/                   # Testing folder
│   ├── cypress/             # Cypress integration tests
│   └── jest/                # Jest unit tests  
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── .eslintrc.js             # ESLint configuration
├── .prettierrc.js           # Prettier configuration
├── jest.config.js           # Jest configuration
├── tsconfig.json            # TypeScript configuration
├── webpack.dev.js           # Webpack configuration for development
└── webpack.prod.js          # Webpack configuration for production
```

---

## Available Scripts

- `npm start` - Run development server with hot reload mode.
- `npm build` - Build distribution package.
- `npm run lint` - Run lints.
- `npm run lint:code` - Run lint for TypeScript/JavaScript files.
- `npm run lint:code:fix` - Run lint for TypeScript/JavaScript files with auto-fix option.
- `npm run lint:style` - Run lint for style files.
- `npm run lint:style:fix` - Run lint for style files with auto-fix option.
- `npm run test:jest` - Run Jest tests.
- `npm run test:jest:watch` - Run Jest tests with watch mode.
- `npm run test:jest:coverage` - Run Jest tests and generate coverage report.
- `npm run test:cypress` - Run Cypress tests in terminal.
- `npm run test:cypress:open` - Open Cypress application.

---

## Best Practices

- ***Check version compatibility for newly installed libraries in our project to avoid force installation of node_modules and breaking the production build.***

Note for all fellow developers:
Please ensure to follow these best practices before pushing code to your branch:

- Write test cases for all new features and bug fixes and run test.
- Perform type checking to ensure type safety.
- Utilize code splitting and lazy loading for optimal performance.
- Run ESLint to maintain code quality and consistency.

