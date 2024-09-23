import { projects, skillIcons } from "./content.js"

// ====== INJECT SKILL ICONS FOR GROWTH SECTION ======

// P element that will contain the icons. Maybe this p should be an unordered list.
const paragraph = document.getElementById('skillParagraph')

// Loop and print an icon for each index in the icons object.
skillIcons.forEach(skill => addSkillIcons(skill))

function addSkillIcons(index) {
    const icon = document.createElement('i')
    icon.title = index.title
    icon.classList = `devicon-${index.class}`
    icon.setAttribute('alt', `${index.title}`)
    paragraph.appendChild(icon)
}
// ==========================================


// ====== INJECT CURRENT LEARNING ICON ======

// --> Set current topic here! <--
let currentLearning = 'MongoDB'

// Store copy container in growth section.
const growthCopy = document.getElementById('growthCopy')
// Create & append icon element.
const currentIcon = document.createElement('i')
growthCopy.appendChild(currentIcon)

// Loop over icons array, find index with current title value, and set class, alt text, and title from that index.
function current(array, title) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].title === title) {
            currentIcon.classList = `currentLearning devicon-${array[i].class}`
            currentIcon.setAttribute('alt', `${title} logo.`)
            currentIcon.title = title
        }
    }
}

current(skillIcons, currentLearning)
// ======================================================


// ====== INJECT PROJECT DATA FOR PROJECTS SECTION ======

// Create necessary elements for each project, populate, and append.
const addProjects = (projects) => {
  projects.map((project) => {
    // Each project is an article that sits inside this projectsDiv.
    const projectsDiv = document.getElementById('allProjects')

    // Each project is contained in an article with individual class for that project's colour scheme.
    const article = document.createElement('article')
    article.classList = `projectContainer ${project.accentColorClass}`
    
    // Project copy is a flex container containing heading, descriptive text, and a div containing live and repo links. 
    const copyContainer = document.createElement('div')
    copyContainer.classList = 'projectCopy'

    // Project heading
    const heading = document.createElement('h3')
    heading.textContent = project.title
    
    // Project copy
    const copyText = document.createElement('p')
    copyText.innerText = project.copy
    
    // Anchors for project urls
    const linkDiv = document.createElement('div')
    linkDiv.classList = 'projectLinks'
      // Live url
    const liveLink = document.createElement('a')
    liveLink.setAttribute('href', project.liveUrl)
    liveLink.setAttribute('target', 'blank')
    liveLink.textContent = 'Live'
    linkDiv.appendChild(liveLink)
    // Repo url - if the property exists
    if (project.repoUrl) {
      const repoLink = document.createElement('a')
      repoLink.setAttribute('href', project.repoUrl)
      repoLink.setAttribute('target', 'blank')
      repoLink.textContent = 'Repo'
      linkDiv.appendChild(repoLink)
    }

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
    projectImg.setAttribute('src', project.imgUrl)
    projectImg.setAttribute('alt', project.imgAlt)

    // Place the image and accent in the image container.
    imgDiv.appendChild(accentDiv)
    imgDiv.appendChild(projectImg)

    // Place image container in the project article.
    article.appendChild(imgDiv)

    // Finally, append article to the projects container.
    projectsDiv.appendChild(article)
  })
}

addProjects(projects)
