









// const element = document.querySelector('.round-overlay');
// let angle = 0;

// function animate() {
//     angle += 0.005 // Change this value to adjust the speed
//     const x = 50 + 40 * Math.cos(angle); // Center X (adjust 40 for radius)
//     const y = 50 + 40 * Math.sin(angle); // Center Y (adjust 40 for radius)
    
//     // Update background position based on x and y
//     element.style.background = `radial-gradient(circle at ${x}% ${y}%, #00000000, #000000)`;

//     // Call the animate function for the next frame
//     requestAnimationFrame(animate);
// }

// animate(); // Start the animation

// const overlay = document.querySelector('.round-overlay');

// // Define min/max boundaries for gradient movement
// const minX = 10; // minimum % for X-axis (10%)
// const maxX = 90; // maximum % for X-axis (90%)
// const minY = 10; // minimum % for Y-axis (10%)
// const maxY = 90; // maximum % for Y-axis (90%)

// window.addEventListener('mousemove', function (event) {
//     // Get the mouse position relative to the viewport
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     // Get the viewport dimensions
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Calculate the percentage for gradient position, based on the cursor position
//     let xPercent = (mouseX / viewportWidth) * 100;
//     let yPercent = (mouseY / viewportHeight) * 100;

//     // Apply min/max constraints
//     xPercent = Math.max(minX, Math.min(xPercent, maxX));
//     yPercent = Math.max(minY, Math.min(yPercent, maxY));

//     // Update the radial gradient's center point
//     overlay.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #00000000, #000000)`;
// });