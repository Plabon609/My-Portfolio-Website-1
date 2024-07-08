

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Toggle the 'bx-x' class on menuIcon
    navbar.classList.toggle('active'); // Toggle the 'active' class on navbar
});




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');

};


// Array of roles to cycle through
const roles = ["Graphics Designer", "Video Editor", "Fullstack Devloper", "Motion Graphics"];
let roleIndex = 0; // Initial index

// Function to change the role text with typing effect
function changeRole() {
    const roleElement = document.getElementById('role');
    const roleText = roles[roleIndex];
    let currentIndex = 0;
    let typingInterval = setInterval(() => {
        roleElement.textContent = roleText.slice(0, currentIndex + 1);
        currentIndex++;
        if (currentIndex === roleText.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                eraseRole();
            }, 2000); // Wait 2 seconds before erasing
        }
    }, 100); // Typing speed, adjust as needed
}

// Function to erase the role text with typing effect
function eraseRole() {
    const roleElement = document.getElementById('role');
    let currentText = roleElement.textContent;
    let eraseInterval = setInterval(() => {
        roleElement.textContent = currentText.slice(0, -1);
        currentText = currentText.slice(0, -1);
        if (currentText === '') {
            clearInterval(eraseInterval);
            roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
            setTimeout(() => {
                changeRole();
            }, 500); // Wait 0.5 seconds before typing next role
        }
    }, 50); // Erasing speed, adjust as needed
}

// Call the initial function to start changing roles
changeRole();
