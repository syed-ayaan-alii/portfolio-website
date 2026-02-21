// COMPREHENSIVE NAVIGATION FIX - GUARANTEED TO WORK
(function() {
  'use strict';
  
  console.log('%c🚀 NAVIGATION DEBUG SCRIPT LOADED', 'color: green; font-size: 16px; font-weight: bold;');
  
  function initNavigation() {
    console.log('%c📋 Initializing Navigation...', 'color: blue; font-weight: bold;');
    
    // Get elements
    const navButtons = document.querySelectorAll('[data-nav-link]');
    const pages = document.querySelectorAll('[data-page]');
    
    console.log('✅ Found ' + navButtons.length + ' navigation buttons');
    console.log('✅ Found ' + pages.length + ' pages');
    
    // Log what we found
    navButtons.forEach(function(btn, index) {
      console.log('  Button ' + index + ': "' + btn.textContent.trim() + '"');
    });
    
    pages.forEach(function(page, index) {
      console.log('  Page ' + index + ': data-page="' + page.getAttribute('data-page') + '"');
    });
    
    if (navButtons.length === 0) {
      console.error('❌ ERROR: No navigation buttons found!');
      return;
    }
    
    if (pages.length === 0) {
      console.error('❌ ERROR: No pages found!');
      return;
    }
    
    // Add click handlers
    navButtons.forEach(function(button, btnIndex) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const clickedText = this.textContent.trim().toLowerCase();
        console.log('%c🖱️ CLICK: "' + clickedText + '"', 'color: orange; font-weight: bold;');
        
        // Remove active from all buttons
        navButtons.forEach(function(btn) {
          btn.classList.remove('active');
          console.log('  Removed active from button: ' + btn.textContent.trim());
        });
        
        // Remove active from all pages
        pages.forEach(function(page) {
          page.classList.remove('active');
          console.log('  Removed active from page: ' + page.getAttribute('data-page'));
        });
        
        // Add active to clicked button
        this.classList.add('active');
        console.log('✅ Added active to button: ' + this.textContent.trim());
        
        // Find and activate matching page
        let pageFound = false;
        pages.forEach(function(page) {
          const pageName = page.getAttribute('data-page');
          
          if (clickedText === pageName) {
            page.classList.add('active');
            pageFound = true;
            console.log('%c✅ ACTIVATED PAGE: "' + pageName + '"', 'color: green; font-weight: bold;');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
        
        if (!pageFound) {
          console.error('❌ ERROR: No matching page found for "' + clickedText + '"');
        }
      });
      
      console.log('✅ Click handler added to button ' + btnIndex);
    });
    
    console.log('%c✅ NAVIGATION READY!', 'color: green; font-size: 16px; font-weight: bold;');
    console.log('%c📌 Click buttons: About, Resume, Contact', 'color: blue;');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
    console.log('⏳ Waiting for DOM...');
  } else {
    initNavigation();
  }
  
})();
