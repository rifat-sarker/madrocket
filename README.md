# Madrocket Technologies & Media

Technologies Used
React
Tailwind CSS
Material Tailwind

Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js and npm.
You have a basic understanding of React and Tailwind CSS.

Installation
To install and set up the project, follow these steps:
1. Clone the repository:
- https://github.com/rifat-sarker/madrocket.git
  
2. Navigate to the project directory:
-cd your-repo

3.Install the dependencies:
- npm install

  
Setup Tailwind CSS
Ensure Tailwind CSS is set up in your project:

Install Tailwind CSS via npm:
- npm install -D tailwindcss
- Initialize Tailwind CSS:


npx tailwindcss init
Configure tailwind.config.js:

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
Create a CSS file (e.g., src/index.css) and add:

@tailwind base;
@tailwind components;
@tailwind utilities;

Import this CSS file in your main JavaScript file (e.g., src/index.js):

import './index.css';


Setup Material Tailwind
Install Material Tailwind:

npm install @material-tailwind/react
Import the Material Tailwind CSS in your src/index.css file:

@import "@material-tailwind/react/tailwind.css";
Use Material Tailwind components in your React components. For example:

import React from 'react';
import { Button } from '@material-tailwind/react';

const App = () => {
  return (
    <div className="p-4">
      <Button color="blue">Material Tailwind Button</Button>
    </div>
  );
};

export default App;
Running the Project
To run the project, use the following command:


npm start
This will start the development server and open the project in your default web browser.

Additional Notes
Ensure all dependencies are correctly installed.
If you encounter any issues, check the console for error messages and ensure all configurations are correct.
Contact
If you have any questions or need further assistance, please contact rifatswd@gmail.com.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
