// project.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const urlParams = new URLSearchParams(window.location.search);
    const projectIndex = urlParams.get('project');

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            if (projectIndex !== null && projects[projectIndex]) {
                const project = projects[projectIndex];

                // Set project title and description
                document.getElementById('project-title').innerText = project.title;
                document.getElementById('evideo').setAttribute('src', 'https://www.youtube.com/embed/' + project.embedLink + '?autoplay=1&mute=1');
                document.getElementById('project-description').innerText = project.description;
                console.log('Project data: ', project);
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

                // Generate and append the features list
                if (project.features && project.features.length > 0) {
                    const featuresContainer = document.getElementById('features-container');
                    const featuresList = generateUnorderedList(project.features[0].split('. ').filter(feature => feature.trim() !== ''));
                    featuresContainer.appendChild(featuresList);
                    console.log("Features List: " + featuresList);
                }
                if (project.responsibilities && project.responsibilities.length > 0) {
                    const resContainer = document.getElementById('responsibilities-container');
                    const resList = generateUnorderedList(project.responsibilities[0].split('. ').filter(res => res.trim() !== ''));
                    resContainer.appendChild(resList);
                    console.log("Features List: " + resList);
                }

            } else {
                document.getElementById('project-title').innerText = "Project Not Found";
                document.getElementById('project-description').innerText = "";
            }
        })
        .catch(error => console.error('Error fetching projects:', error));
});

// Function to generate an unordered list from an array of features
function generateUnorderedList(features) {
    const ul = document.createElement('ul');

    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        ul.appendChild(li);
    });

    return ul;
}