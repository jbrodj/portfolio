// Array of project data
export const projects = [
  {
      title: 'My TELUS Universal Experiences',
      liveUrl: 'https://www.telus.com/',
      imgUrl: './assets/telusMyTelusView.png',
      imgAlt: 'Screenshot of the My Telus App overview page.',
      copy: `Full stack universal experiences for authenticated accounts in the My Telus app - including customer data API, app navigation, universal UI elements, and app-wide end-to-end. Built in React, Express & Node. Tested with Jest, Cypress, and Postman using Github Actions for automated runs. Using Docker for containerization; deployed on GKE and monitored with Dynatrace.`,
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
  },
  {
      title: 'iBag of Holding',
      liveUrl: 'https://ibagofholding.netlify.app/',
      repoUrl: 'https://github.com/jbrodj/ibag-of-holding',
      imgUrl: './assets/ibagOfHolding.jpg',
      imgAlt: 'Screenshot of D&D inventory app showing an input form and several items stored in an inventory list.',
      copy: `Inventory app for your D&D party built in React, and using Firebase to store item names & quantities as persistent data, and update the database from user inputs in real time.`,
      accentColorClass: 'iBag'
  },
  {
      title: `Let's Watch a Movie With...`,
      liveUrl: 'https://bootcampprojecttwo.github.io/movieApp/',
      repoUrl: 'https://github.com/bootcampProjectTwo/movieApp',
      imgUrl: './assets/letsWatchAMovie2.jpg',
      imgAlt: 'Screenshot of a movie recommendation app with a stylized title and input form',
      copy: `Movie finder app that generates a list of recommended movies based on multiple optional user inputs. This project was built using JavaScript with the Open Movie Database API as a paired programming project.`,
      accentColorClass: 'letsWatch'
  },
  {
      title: 'Which Game Should We Play?!',
      liveUrl: 'https://whichgameshouldweplay.netlify.app/',
      repoUrl: 'https://github.com/jbrodj/which-game-should-we-play.git',
      imgUrl: './assets/boardGameFinder.jpg',
      imgAlt: 'Screenshot of the primary interface of a board game recommendation app featuring an input form with several range sliders.',
      copy: `Board game recommendation app built in jQuery using the Board Game Atlas API. It features multiple range sliders for providing user input for number of players, age, and length of the game!`,
      accentColorClass: 'whichGame'
  },
      {
      title: 'Bar One (PSD Conversion)',
      liveUrl: 'https://jbrodj.github.io/brodie-day-project-one/',
      repoUrl: 'https://github.com/jbrodj/brodie-day-project-one',
      imgUrl: './assets/barOneConversion.jpg',
      imgAlt: 'Screenshot of the landing page of a website for a fictional bar featuring a navigation bar and a heading overlaid on greyscale images of bar settings.',
      copy: `Fully responsive multi-page PSD conversion for a fictional nightlife venue!`,
      accentColorClass: 'barOne'
  }
]

// Title for tooltip; class name from devicon classes (appended to 'devicon-'). From https://devicon.dev/ 
export const skillIcons = [
  {
      title: 'HTML5',
      class: 'html5-plain-wordmark', 
  },
  {
      title: 'CSS3',
      class: 'css3-plain-wordmark'
  },
  {
      title: 'JavaScript ES6',
      class: 'javascript-plain'
  },
  {
      title: 'React',
      class: 'react-original-wordmark'
  },
  {
      title: 'Sass',
      class: 'sass-original'
  },
  {
      title: 'C',
      class: 'c-plain-wordmark'
  },
  {
      title: 'Python',
      class: 'python-plain-wordmark'
  },
  {
      title: 'NodeJS',
      class: 'nodejs-plain-wordmark'
  },
  {
      title: 'NPM',
      class: 'npm-original-wordmark'
  },
  {
      title: 'GitHub',
      class: 'github-original-wordmark'
  },
  {
      title: 'GitHub Actions',
      class: 'githubactions-plain'
  },
  {
      title: 'Git',
      class: 'git-plain-wordmark'
  },
  {
      title: 'Docker',
      class: 'docker-plain-wordmark'
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
      title: 'Cypress',
      class: 'cypressio-plain-wordmark'
  },
  {
      title: 'ESLint',
      class: 'eslint-plain-wordmark'
  },
  {
      title: 'Postman',
      class: 'postman-plain'
  },
  {
      title: 'Jira',
      class: 'jira-plain-wordmark'
  },
  {
      title: 'Confluence',
      class: 'confluence-plain-wordmark'
  },
  {
      title: 'MongoDB',
      class: 'mongodb-plain-wordmark'
  },
  {
      title: 'Flask',
      class: 'flask-original-wordmark'
  },
  {
      title: 'SQL',
      class: 'sqlite-plain'
  }
]