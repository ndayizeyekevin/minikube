// Class Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize interactive features
  initNavigation();
  initStudentFiltering();
  initAssignmentFiltering();
  initSmoothScroll();
});

/**
 * Initialize navigation highlighting
 */
function initNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === href || (currentPath === '/' && href === '/')) {
      link.style.opacity = '0.6';
      link.style.pointerEvents = 'none';
    }
  });
}

/**
 * Add filtering functionality to students
 */
function initStudentFiltering() {
  // Check if we're on the students page
  if (!document.querySelector('.students-grid')) return;

  // Add search input (can be added to HTML later)
  const studentsSection = document.querySelector('.students-section');
  if (studentsSection && !document.querySelector('.student-search')) {
    const searchDiv = document.createElement('div');
    searchDiv.className = 'student-search';
    searchDiv.innerHTML = '<input type="text" id="studentSearchInput" placeholder="Search students by name or email..." class="search-input">';
    studentsSection.insertBefore(searchDiv, studentsSection.firstChild);
    
    const searchInput = document.getElementById('studentSearchInput');
    searchInput.addEventListener('keyup', filterStudents);
  }
}

/**
 * Filter students based on search input
 */
function filterStudents(e) {
  const searchTerm = e.target.value.toLowerCase();
  const studentCards = document.querySelectorAll('.student-card');
  
  studentCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const email = card.querySelector('.student-email').textContent.toLowerCase();
    
    if (name.includes(searchTerm) || email.includes(searchTerm)) {
      card.style.display = 'block';
      card.classList.add('fade-in');
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Add filtering functionality to assignments
 */
function initAssignmentFiltering() {
  // Check if we're on the assignments page
  if (!document.querySelector('.assignments-list')) return;

  // Add filter buttons
  const assignmentsSection = document.querySelector('.assignments-section');
  if (assignmentsSection && !document.querySelector('.filter-buttons')) {
    const filterDiv = document.createElement('div');
    filterDiv.className = 'filter-buttons';
    filterDiv.innerHTML = `
      <button class="filter-btn active" data-filter="all">All Assignments</button>
      <button class="filter-btn" data-filter="pending">Pending</button>
      <button class="filter-btn" data-filter="completed">Completed</button>
    `;
    assignmentsSection.insertBefore(filterDiv, assignmentsSection.firstChild);
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', filterAssignments);
    });
  }
}

/**
 * Filter assignments based on status
 */
function filterAssignments(e) {
  const filter = e.target.getAttribute('data-filter');
  const assignmentItems = document.querySelectorAll('.assignment-item');
  
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');
  
  // Filter items
  assignmentItems.forEach(item => {
    if (filter === 'all') {
      item.style.display = 'block';
    } else if (filter === 'pending' && item.classList.contains('pending')) {
      item.style.display = 'block';
    } else if (filter === 'completed' && item.classList.contains('completed')) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
    item.classList.add('fade-in');
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Animate elements on scroll
 */
function observeElements() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.info-card, .student-card, .assignment-item').forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations
observeElements();

// Add console welcome message
console.log('%cWelcome to ClassHub! 🎓', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cThis is a dynamic class website built with Node.js, Express, and EJS.', 'color: #666; font-size: 14px;');
