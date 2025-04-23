// Array of project data
export const projects = [
  {
      title: 'Take a Hike',
      demoUrl: 'https://youtu.be/FIYaefWO7AU&t=29s',
      repoUrl: 'https://github.com/jbrodj/take-a-hike',
      imgUrl: './assets/take-a-hike.png',
      imgAlt: 'Screenshot of the Take a Hike "my hikes" view, showing location and distance information about a recent hike.',
      copy: `Full-stack social media application for sharing hikes and following other users to keep up with their activity! Serving user-generated content with a Python server with Flask, using SQLite for databases, JavaScript for UI interactivity, and a Cloudinary integration for image hosting. Tested with Pytest, using Github Actions for automated lint and unit testing.`,
      accentColorClass: 'takeAHike'
  },
  {
      title: 'My TELUS Universal Experiences',
      liveUrl: 'https://www.telus.com/',
      imgUrl: './assets/telusMyTelusView.png',
      imgAlt: 'Screenshot of the My Telus App overview page.',
      copy: `Full-stack universal experiences for authenticated accounts in the My Telus app - including customer data API, app navigation, universal UI elements, and app-wide end-to-end. Built in React, Express & Node. Tested with Jest, Cypress, and Postman using Github Actions for automated runs. Using Docker for containerization; deployed on GKE and monitored with Dynatrace.`,
      accentColorClass: 'telus'
  },
  {
      title: 'TELUS Cart, Checkout, Thank-you Journeys',
      liveUrl: 'https://www.telus.com',
      imgUrl: './assets/telusCheckoutView.png',
      imgAlt: 'Screenshot of the Telus cart page with an iphone and plush alpaca in the cart.',
      copy: `Full-stack e-commerce journeys for all new and existing business and consumer users across Canada. Built in React, Express & Node. Tested with Jest, Cypress, and Postman using Github Actions for automated runs. Using Docker for containerization and Redis; deployed on GKE and monitored with Dynatrace.`,
      accentColorClass: 'telus2'
  },
  {
      title: 'Gift Exchange Randomizer',
      liveUrl: 'https://giftexchange.netlify.app/',
      repoUrl: 'https://github.com/jbrodj/randomizer',
      imgUrl: './assets/giftExchangeRandomizer.jpg',
      imgAlt: 'Screenshot of a Secret Santa app with a festive foliage theme.',
      copy: `Name list randomizer built with JavaScript for your favourite holiday gift exchange games like Secret Santa and White Elephant (for a list you won't have to check twice)! Featuring a background image from Erol Ahmed.`,
      accentColorClass: 'giftExchange'
  }
]

// Title for tooltip; class name from devicon classes (appended to 'devicon-'). From https://devicon.dev/ 
export const skillIcons = [
  {
    title: 'JavaScript ES6+',
    class: 'javascript-plain'
  },
  {
      title: 'Python',
      class: 'python-plain'
  },
  {
      title: 'TypeScript',
      class: 'typescript-plain'
  },
  {
      title: 'C',
      class: 'c-plain'
  },
  {
    title: 'SQL',
    class: 'sqlite-plain'
  },
  {
    title: 'NodeJS',
    class: 'nodejs-plain'
  },
  {
    title: 'React',
    class: 'react-original'
  },
  {
      title: 'Flask',
      class: 'flask-original'
  },
  {
      title: 'HTML5',
      class: 'html5-plain', 
  },
  {
      title: 'CSS3',
      class: 'css3-plain'
  },
  {
    title: 'Sass',
      class: 'sass-original'
  },
  {
      title: 'Bootstrap',
      class: 'bootstrap-plain'
  },
  {
      title: 'NPM',
      class: 'npm-original-wordmark'
  },
  {
      title: 'GitHub',
      class: 'github-original'
  },
  {
      title: 'GitHub Actions',
      class: 'githubactions-plain'
  },
  {
      title: 'Git',
      class: 'git-plain'
  },
  {
      title: 'Docker',
      class: 'docker-plain'
  },
  {
      title: 'ExpressJS',
      class: 'express-original'
  },
  {
      title: 'Google Cloud Platform',
      class: 'googlecloud-plain'
  },
  {
      title: 'Jest',
      class: 'jest-plain'
  },
  {
      title: 'Pytest',
      class: 'pytest-plain'
  },
  {
      title: 'Cypress',
      class: 'cypressio-plain'
  },
  {
      title: 'Postman',
      class: 'postman-plain'
  },
  {
      title: 'Jira',
      class: 'jira-plain'
  },
  {
      title: 'Confluence',
      class: 'confluence-plain'
  }
]