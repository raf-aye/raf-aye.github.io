let currentSlide = 0;
const projectsContainer = document.querySelector('.projects-container');
const projects = document.querySelectorAll('.project-item')
const currentPageElement = document.getElementById('current-page');
const totalPagesElement = document.getElementById('total-pages');






const totalProjects = projects.length
totalPagesElement.textContent = Math.ceil(totalProjects / 2);
showProjects()
document.querySelector('.next').addEventListener('click', () => {
    if (currentSlide < totalProjects / 2 - 1) {
        currentSlide++;
        
        showProjects()
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlide > 0) {

        currentSlide--;

        showProjects()
    }
});


function showProjects() {
    // Hide all projects
    projects.forEach(project => {
        project.classList.remove('active')
        project.classList.add('hidden')
    });



        // Move to the next project
        const nextProject1 = projects[currentSlide * 2];
        void nextProject1.offsetWidth;
        
        // Apply the transition
        nextProject1.classList.remove("hidden")

        nextProject1.classList.add('active');

        if (currentSlide * 2 + 1 < projects.length) {
            const nextProject2 = projects[currentSlide * 2 + 1]
            void nextProject2.offsetWidth;
            nextProject2.classList.remove("hidden")
            nextProject2.classList.add('active');
        }
        currentPageElement.textContent = currentSlide + 1;
}
