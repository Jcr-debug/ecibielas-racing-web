// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Team Carousel Functionality
    const teamGroups = ['Grupo Inversionista', 'Grupo General', 'Grupo Financiero', 'Grupo Diseño y Desarrollo', 'Grupo Producción', 'Grupo Calidad'];
    let currentGroupIndex = 0;
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const teamGroupElements = document.querySelectorAll('.team-group');

    function showGroup(index) {
        // Hide all groups
        teamGroupElements.forEach(group => {
            group.classList.remove('active');
        });

        // Show current group
        teamGroupElements[index].classList.add('active');

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === teamGroups.length - 1;
    }

    function nextGroup() {
        if (currentGroupIndex < teamGroups.length - 1) {
            currentGroupIndex++;
            showGroup(currentGroupIndex);
        }
    }

    function prevGroup() {
        if (currentGroupIndex > 0) {
            currentGroupIndex--;
            showGroup(currentGroupIndex);
        }
    }

    // Event listeners
    nextBtn.addEventListener('click', nextGroup);
    prevBtn.addEventListener('click', prevGroup);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentGroupIndex = index;
            showGroup(currentGroupIndex);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevGroup();
        } else if (e.key === 'ArrowRight') {
            nextGroup();
        }
    });

    // Initialize
    showGroup(0);

    // Rest of existing code...
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA Button smooth scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const missionSection = document.querySelector('#mision');
            if (missionSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = missionSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Add active class to navigation items based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav a[href^="#"]');

    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Add some animation effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.mission-card, .team-member, .product-image, .cost-table-container, .summary-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (hamburger && navMenu && menuOverlay) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking on overlay
        menuOverlay.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Add hover effects to tables (mejorado para no interferir con CSS)
    const tableRows = document.querySelectorAll('.requirements-table tbody tr, .costs-table tbody tr');
    tableRows.forEach(row => {
        // Solo aplicar si no tiene hover definido en CSS
        if (!row.matches(':hover')) {
            row.addEventListener('mouseenter', function() {
                if (!this.style.transform) {
                    this.style.transform = 'scale(1.02)';
                    this.style.transition = 'transform 0.2s ease';
                }
            });
            
            row.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });

    // Add counter animation for big numbers
    const bigNumbers = document.querySelectorAll('.big-number');
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number based on its content
            if (element.textContent.includes('%')) {
                element.textContent = Math.round(current) + '%';
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    // Start counter animation when elements come into view
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number > 0) {
                    animateCounter(element, number);
                    counterObserver.unobserve(element);
                }
            }
        });
    });

    bigNumbers.forEach(number => {
        counterObserver.observe(number);
    });

    // Image Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.getElementById('closeModal');
    const clickableImages = document.querySelectorAll('.clickable-image');

    // Open modal when clicking on images
    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalCaption.textContent = ''; // Sin caption
        });
    });

    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add resize handler for responsive behavior
window.addEventListener('resize', function() {
    // Update any dynamic calculations if needed
    const heroHeight = window.innerHeight * 0.6;
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        hero.style.minHeight = heroHeight + 'px';
    }
});