document.addEventListener("DOMContentLoaded", function () {
    const imageNodeList = document.querySelectorAll(".image-container img");
    const imageArray = Array.from(imageNodeList);

    const maxAttempts = 100; // Maximum number of attempts to find a non-overlapping position
    const resizeFactor = 0.9; // Factor by which to reduce the size on each resize attempt

    function setPositions(images, positions) {
        images.forEach((img, index) => {
            img.style.left = `${positions[index].left}px`;
            img.style.top = `${positions[index].top}px`;
        });
    }

    function getRandomPos(maxWidth, maxHeight, imgWidth, imgHeight) {
        const randomX = Math.floor(Math.random() * (maxWidth - imgWidth));
        const randomY = Math.floor(Math.random() * (maxHeight - imgHeight));
        return { left: randomX, top: randomY };
    }

    function isOverlapping(pos, positions, imgWidth, imgHeight) {
        return positions.some(p => {
            return !(
                pos.left + imgWidth < p.left || // Right of new image is left of existing image
                pos.left > p.left + p.width ||  // Left of new image is right of existing image
                pos.top + imgHeight < p.top ||  // Bottom of new image is above existing image
                pos.top > p.top + p.height      // Top of new image is below existing image
            );
        });
    }

    function positionImages(images) {
        const newPositions = [];
        images.forEach(img => {
            let pos;
            let attempts = 0;
            let resized = false;

            while (attempts < maxAttempts) {
                pos = getRandomPos(window.innerWidth, window.innerHeight, img.width, img.height);
                if (!isOverlapping(pos, newPositions, img.width, img.height)) {
                    newPositions.push({ ...pos, width: img.width, height: img.height });
                    break;
                }
                attempts++;
            }

            if (attempts >= maxAttempts) {
                // Resize and retry positioning
                img.width *= resizeFactor;
                img.height *= resizeFactor;
                console.warn('Resizing image due to overlapping');
                positionImages([img]); // Retry positioning this image
            }
        });

        setPositions(images, newPositions);
    }

    positionImages(imageArray);
});