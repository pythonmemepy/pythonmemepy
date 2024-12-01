// Function to scroll to the relevant section
function scrollToSection(sectionId) {
    // Get the element by id and scroll it into view
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });

    // Highlight the section (optional, for better UX)
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    var activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
