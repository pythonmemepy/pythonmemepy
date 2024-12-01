// Function to scroll to the relevant section
function scrollToSection(sectionId) {
    // Get the element by id and scroll it into view
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });

    // Hide the main page content when a section is clicked
    var mainContent = document.querySelector('header');
    mainContent.style.display = 'none'; // Hide header with main page text
    
    // Show the active section
    var sections = document.querySelectorAll('section');
    sections.forEach(function(sec) {
        sec.style.display = 'none'; // Hide all sections
    });
    
    section.style.display = 'block'; // Show the clicked section
}
