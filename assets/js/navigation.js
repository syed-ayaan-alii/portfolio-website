// Navigation script - 100% working
console.log('Navigation script loaded!');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready, initializing navigation...');
  
  // Get all navigation buttons and pages
  const navButtons = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');
  
  console.log('Found', navButtons.length, 'nav buttons');
  console.log('Found', pages.length, 'pages');
  
  // Add click event to each navigation button
  navButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim().toLowerCase();
      console.log('Button clicked:', buttonText);
      
      // Remove active class from all buttons and pages
      navButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      pages.forEach(function(page) {
        page.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Find and activate the matching page
      pages.forEach(function(page) {
        const pageName = page.getAttribute('data-page');
        console.log('Checking page:', pageName);
        
        if (buttonText === pageName) {
          page.classList.add('active');
          console.log('Activated page:', pageName);
          window.scrollTo(0, 0);
        }
      });
    });
  });
  
  console.log('Navigation initialized successfully!');
});
