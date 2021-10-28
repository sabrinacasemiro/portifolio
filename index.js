import projects from "./src/modules/projects/projects.js";

const $menuProjects = document.querySelector('.header--projects')

$menuProjects.addEventListener('click', () => {
    const $containerProjects = document.querySelector('.container-projects')
    console.log($containerProjects)

    $containerProjects.scrollIntoView()

})

projects()

console.log('ble')
