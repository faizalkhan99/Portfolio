// project.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const urlParams = new URLSearchParams(window.location.search);
    const projectIndex = urlParams.get('project');

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            if (projectIndex !== null && projects[projectIndex]) {
                const currentProject = projects[projectIndex];

                // Set project title and description
                document.getElementById('project-title').innerText = currentProject.title;
                document.getElementById('project-subtitle').innerText = currentProject.subtitle;

                if (currentProject.embedLink === "") {
                    const vid = document.getElementById('showhide');
                    vid.style.display = "none";
                }
                else {
                    document.getElementById('evideo').setAttribute('src', 'https://www.youtube.com/embed/' + currentProject.embedLink + '?autoplay=1&mute=1');
                }


                document.getElementById('project-description').innerText = currentProject.description;
                console.log('Project data: ', currentProject);
                // Set project screenshots
                const screenshotsContainer = document.getElementById('screenshots');
                currentProject.screenshots.forEach(src => {
                    // Create responsive container to maintain aspect ratio
                    const responsiveContainer = document.createElement('div');
                    responsiveContainer.className = 'responsive-container';

                    // Create and append the image
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = currentProject.title;
                    responsiveContainer.appendChild(img);

                    // Append responsive container to screenshots grid
                    screenshotsContainer.appendChild(responsiveContainer);
                });

                // Set game link
                const gameLink = document.getElementById('game-link');
                if (currentProject.gameLink && currentProject.gameLink.trim() !== "") {
                    gameLink.href = currentProject.gameLink;
                    gameLink.style.display = 'inline-block'; // or 'flex' depending on your layout
                } else {
                    gameLink.style.display = 'none'; // redundant but safe fallback
                }

                // Generate and append the features list
                if (currentProject.features && currentProject.features.length > 0) {
                    const featuresContainer = document.getElementById('features-container');
                    const featuresList = generateUnorderedList(currentProject.features[0].split('*').filter(feature => feature.trim() !== ''));
                    featuresContainer.appendChild(featuresList);
                    console.log("Features List: " + featuresList);
                }
                if (currentProject.responsibilities && currentProject.responsibilities.length > 0) {
                    const resContainer = document.getElementById('responsibilities-container');
                    const resList = generateUnorderedList(currentProject.responsibilities[0].split('*').filter(res => res.trim() !== ''));
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