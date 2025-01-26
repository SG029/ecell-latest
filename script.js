

const cursor = document.querySelector('.cursor');
// Variables for cursor size and position
// const cursor = document.getElementById('cursor');
let cursorSize = 25;  // Default cursor size

// Update cursor position based on mouse movement
document.addEventListener('mousemove', (e) => {
  const x = e.clientX - cursorSize / 2; // Center the cursor
  const y = e.clientY - cursorSize / 2;
  
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

// Change cursor size when hovering over an h1 tag
const headings = document.querySelectorAll('h1');

headings.forEach((heading) => {
  heading.addEventListener('mouseenter', () => {
    cursorSize = 130; // Increase cursor size when hovering over h1
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });

  heading.addEventListener('mouseleave', () => {
    cursorSize = 25; // Reset cursor size
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });
});


const headingss = document.querySelectorAll('h2');

headingss.forEach((heading) => {
  heading.addEventListener('mouseenter', () => {
    cursorSize = 100; // Increase cursor size when hovering over h1
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });

  heading.addEventListener('mouseleave', () => {
    cursorSize = 25; // Reset cursor size
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
  });
});
const eventsContainer = document.getElementById("past-events");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
    scrollAmount += 320; // Adjust based on card width + gap
    eventsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener("click", () => {
    scrollAmount -= 320; // Adjust based on card width + gap
    if (scrollAmount < 0) scrollAmount = 0; // Prevent overscroll
    eventsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});
