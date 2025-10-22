import { projects, skillIcons } from "./content.js"
import { addSkillIcons, setCurrentLearningTopic, addProjects } from "./helpers.js"

// ====== INJECT SKILL ICONS FOR GROWTH SECTION ======

// Loop and print an icon for each index in the icons object.
skillIcons.forEach(skill => addSkillIcons(skill))

// ==========================================


// ====== INJECT CURRENT LEARNING ICON ======

let currentTopic = 'ExpressJS' // <-- Set current topic here
let currentDescription = `{ Building a full-stack app with React, Express, & MySQL }` // <-- Set description here

setCurrentLearningTopic(skillIcons, currentTopic, currentDescription)

// ======================================================


// ====== INJECT PROJECT DATA FOR PROJECTS SECTION ======

addProjects(projects)

// 
