// ====== INJECT SKILL ICONS FOR GROWTH SECTION ======

// Title for tooltip; class name from devicon classes (appended to 'devicon-').
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
        title: 'GitHub',
        class: 'github-original'
    },
        {
        title: 'Git',
        class: 'git-plain'
    }
]

// P element that will contain the icons.
const paragraph = document.getElementById('skillParagraph')

skillIcons.forEach(skill => addSkillIcons(skill))

function addSkillIcons(index) {
    const icon = document.createElement('i');
    icon.title = index.title;
    icon.classList = `devicon-${index.class}`;
    icon.setAttribute('alt', `${index.title}`)
    paragraph.appendChild(icon);
}

// ====== INJECT CURRENT LEARNING ICON ======

// Set current topic here!
let currentLearning = 'Git';

// Create & append icon element.
const growthCopy = document.getElementById('growthCopy');
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