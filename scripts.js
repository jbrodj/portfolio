// ====== INJECT SKILL ICONS FOR GROWTH SECTION ======

// Title for tooltip; class name from devicon classes (appended to 'devicon-'). From https://devicon.dev/ 
const skillIcons = [
    {
        title: 'HTML5',
        class: 'html5-plain', 
    },
    {
        title: 'CSS3',
        class: 'css3-plain'
    },
    {
        title: 'JavaScript ES6',
        class: 'javascript-plain'
    },
    {
        title: 'React',
        class: 'react-original'
    },
    {
        title: 'JQuery',
        class: 'jquery-plain'
    },
    {
        title: 'Sass',
        class: 'sass-original'
    },
    {
        title: 'Python',
        class: 'python-plain'
    },
    {
        title: 'NodeJS',
        class: 'nodejs-plain'
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
        title: 'Cypress',
        class: 'cypressio-plain'
    },
    {
        title: 'ESLint',
        class: 'eslint-plain'
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
    },
    {
        title: 'MongoDB',
        class: 'mongodb-plain'
    }
]

// P element that will contain the icons. Maybe this p should be an unordered list.
const paragraph = document.getElementById('skillParagraph')

// Loop and print an icon for each index in the icons object.
skillIcons.forEach(skill => addSkillIcons(skill))

function addSkillIcons(index) {
    const icon = document.createElement('i');
    icon.title = index.title;
    icon.classList = `devicon-${index.class}`;
    icon.setAttribute('alt', `${index.title}`)
    paragraph.appendChild(icon);
}
// ==========================================


// ====== INJECT CURRENT LEARNING ICON ======

// --> Set current topic here! <--
let currentLearning = 'MongoDB';

// Store copy container in growth section.
const growthCopy = document.getElementById('growthCopy');
// Create & append icon element.
const currentIcon = document.createElement('i');
growthCopy.appendChild(currentIcon)

// Loop over icons array, find index with current title value, and set class, alt text, and title from that index.
function current(array, title) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].title === title) {
            currentIcon.classList = `currentLearning devicon-${array[i].class}`;
            currentIcon.setAttribute('alt', `${title} logo.`)
            currentIcon.title = title
        }
    }
}

current(skillIcons, currentLearning)
// ======================================================


// ====== INJECT PROJECT DATA FOR PROJECTS SECTION ======

// Array to contain project data
const projects = [
    {
        title: 'My TELUS Universal Experiences',
        liveUrl: 'https://www.telus.com/',
        imgUrl: './assets/telusMyTelusView.png',
        imgAlt: 'Screenshot of the My Telus App overview page.',
        copy: `Full stack universal experiences for the authenticated account space in the My Telus experience. Including customer data API, app navigation, universal UI elements, and app-wide end-to-end. Built in React, Express & Node. Tested with Jest and Cypress using Github Actions for automated runs. Using Docker for containerization; deployed on GKE and monitored with Dynatrace.`,
        accentColorClass: 'telus'
    },
    {
        title: 'TELUS Cart, Checkout, Thank-you Journeys',
        liveUrl: 'https://www.telus.com',
        imgUrl: './assets/telusCheckoutView.png',
        imgAlt: 'Screenshot of the Telus cart page with an iphone and plush alpaca in the cart.',
        copy: `Full-stack e-commerce journeys for all new and existing business and consumer users across Canada. Built in React, Express & Node. Tested with Jest and Cypress using Github Actions for automated runs. Using Docker for containerization and Redis; deployed on GKE and monitored with Dynatrace.`,
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

// Create necessary elements for each project, populate, and append.
function addProjects(array) {
    for (let i = 0; i < array.length; i++) {

        // Each project is an article that sits inside this projectsDiv.
        const projectsDiv = document.getElementById('allProjects')

        // Each project is contained in an article with individual class for that project's colour scheme.
        const article = document.createElement('article');
        article.classList = `projectContainer ${array[i].accentColorClass}`;
        
        // Project copy is a flex container containing heading, descriptive text, and a div containing live and repo links. 
        const copyContainer = document.createElement('div');
        copyContainer.classList = 'projectCopy';

        // Project heading
        const heading = document.createElement('h3');
        heading.textContent = array[i].title;
        
        // Project copy
        const copyText = document.createElement('p');
        copyText.innerText = array[i].copy;
        
        // Anchors for project urls
        const linkDiv = document.createElement('div')
        linkDiv.classList = 'projectLinks'
            // Live url
        const liveLink = document.createElement('a')
        liveLink.setAttribute('href', array[i].liveUrl)
        liveLink.textContent = 'Live'
            // Repo url
        const repoLink = document.createElement('a')
        repoLink.setAttribute('href', array[i].repoUrl)
        repoLink.textContent = 'Repo'
            // Place them in the div.
        linkDiv.appendChild(liveLink)
        linkDiv.appendChild(repoLink)

        // Place heading, copy, and links container inside the copy container.
        copyContainer.appendChild(heading)
        copyContainer.appendChild(copyText)
        copyContainer.appendChild(linkDiv)

        // Place whole copy container, with all of above, in the project article. 
        article.appendChild(copyContainer)

        // Project image and dotted accent border is in a div, placed in the article.
        const imgDiv = document.createElement('div')
            // Image and accent border
        const accentDiv = document.createElement('div')
        const projectImg = document.createElement('img')
        imgDiv.classList = 'projectImg'
        accentDiv.classList = 'projectAccent'
        projectImg.setAttribute('src', array[i].imgUrl)
        projectImg.setAttribute('alt', array[i].imgAlt)

        // Place the image and accent in the image container.
        imgDiv.appendChild(accentDiv)
        imgDiv.appendChild(projectImg)

        // Place image container in the project article.
        article.appendChild(imgDiv)

        // Finally, append article to the projects container.
        projectsDiv.appendChild(article)
    }
}

addProjects(projects)