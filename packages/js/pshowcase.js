// project.js
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectIndex = urlParams.get('project');

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            if (projectIndex !== null && projects[projectIndex]) {
                const project = projects[projectIndex];

                // Set project title and description
                document.getElementById('project-title').innerText = project.title;
                document.getElementById('project-description').innerText = project.description;

                // Set project screenshots
                const screenshotsContainer = document.getElementById('screenshots');
                project.screenshots.forEach(src => {
                    // Create responsive container to maintain aspect ratio
                    const responsiveContainer = document.createElement('div');
                    responsiveContainer.className = 'responsive-container';

                    // Create and append the image
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = project.title;
                    responsiveContainer.appendChild(img);

                    // Append responsive container to screenshots grid
                    screenshotsContainer.appendChild(responsiveContainer);
                });

                // Set game link
                const gameLink = document.getElementById('game-link');
                gameLink.href = project.gameLink;
            } else {
                document.getElementById('project-title').innerText = "Project Not Found";
                document.getElementById('project-description').innerText = "";
            }
        })
        .catch(error => console.error('Error fetching projects:', error));
});
