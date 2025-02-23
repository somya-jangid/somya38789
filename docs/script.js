// Add any JavaScript functionality here, if needed.
// For example, handling dropdown menus, animations, etc.

document.addEventListener('DOMContentLoaded', function() {
 // Example: Toggle dropdown menu
 const profileDropdown = document.querySelector('.profile-dropdown');

 if (profileDropdown) {
 profileDropdown.addEventListener('click', function(event) {
 // Prevent the click event from propagating to parent elements
 event.stopPropagation();

 // Toggle the 'active' class on the dropdown content
 const dropdownContent = this.querySelector('.dropdown-content');
 dropdownContent.classList.toggle('active');
 });

 // Close the dropdown if clicked outside
 document.addEventListener('click', function(event) {
 const dropdownContent = document.querySelector('.dropdown-content.active');
 if (dropdownContent && !profileDropdown.contains(event.target)) {
 dropdownContent.classList.remove('active');
 }
 });
 }

 // Example: Add smooth scrolling to anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
 anchor.addEventListener('click', function (e) {
 e.preventDefault();

 document.querySelector(this.getAttribute('href')).scrollIntoView({
 behavior: 'smooth'
 });
 });
 });
});