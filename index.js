import projects from "./src/modules/projects/projects.js";

const $menuProjects = document.querySelector('.header--projects')
const $menuAboutMe = document.querySelector('.header--about-me')
const $buttonToTop = document.querySelector('.button-to-top')

$menuProjects.addEventListener('click', () => {
    const $containerProjects = document.querySelector('.container-projects')
    $containerProjects.scrollIntoView()

})

$menuAboutMe.addEventListener('click', () => {
    const $aboutMe = document.querySelector('.container-aboutme')
    $aboutMe.scrollIntoView()
})

$buttonToTop.addEventListener('click', () => {
    const $welcome = document.querySelector('.main-welcome')
    $welcome.scrollIntoView()
})

projects()
