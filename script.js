function createBubble(event) {
    const container = document.getElementById('container');
    
    // Create a new bubble element
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Set bubble position based on mouse click
    const x = event.clientX - container.getBoundingClientRect().left;
    const y = event.clientY - container.getBoundingClientRect().top;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    // Add the bubble to the container
    container.appendChild(bubble);

    // Remove the bubble after the animation ends
    bubble.addEventListener('animationend', () => {
        container.removeChild(bubble);
    });
}

function animateLink(event) {
    const clickedLink = event.target;

    // Add a class to trigger the animation
    clickedLink.classList.add('link-clicked');

    // Remove the class after the animation ends
    setTimeout(() => {
        clickedLink.classList.remove('link-clicked');
    }, 300);
}
