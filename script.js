/*document.getElementById('exploreButton').addEventListener('click', function() {
    document.getElementById('section1').scrollIntoView({ behavior: 'smooth' });
});
*/
// JavaScript to dynamically switch video source based on screen size
document.addEventListener("DOMContentLoaded", function() {

    function checkScreenSize() {
        let video = document.getElementById("background-video");
        if (window.innerWidth <= 768) {
            // Mobile video source
            document.getElementById("video-source").src = "mobile_size.mp4";
        } else {
            // Desktop video source
            document.getElementById("video-source").src = "desktop_size.mp4";
        }
        // Load the new video source
        video.load();
    }

    // Check the screen size on page load
    checkScreenSize();

    // Also check when the window is resized
    window.addEventListener("resize", checkScreenSize);
});