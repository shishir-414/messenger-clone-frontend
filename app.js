// Add event listener for the new End Call icon (now in bottom-right)
document.getElementById('videoContainer').addEventListener('click', (event) => {
    const videoContainer = event.currentTarget;
    const rect = videoContainer.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Check if the click is within the bounds of the ::after pseudo-element (bottom-right corner)
    if (clickX >= rect.width - 70 && clickY >= rect.height - 70 && videoContainer.style.display === 'flex') {
        endCall(); // Call the existing endCall function
    }
});