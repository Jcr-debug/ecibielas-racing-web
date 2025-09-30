document.addEventListener('DOMContentLoaded', function() {
    const teamGroups = ['Grupo Inversionista', 'Grupo General', 'Grupo Financiero', 'Grupo Diseño y Desarrollo', 'Grupo Producción', 'Grupo Calidad'];
    let currentGroupIndex = 0;
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const teamGroupElements = document.querySelectorAll('.team-group');

    function showGroup(index) {
        teamGroupElements.forEach(group => {
            group.classList.remove('active');
        });

        teamGroupElements[index].classList.add('active');

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

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

    nextBtn.addEventListener('click', nextGroup);
    prevBtn.addEventListener('click', prevGroup);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentGroupIndex = index;
            showGroup(currentGroupIndex);
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevGroup();
        } else if (e.key === 'ArrowRight') {
            nextGroup();
        }
    });

    showGroup(0);

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

    const animatedElements = document.querySelectorAll('.mission-card, .team-member, .product-image, .cost-table-container, .summary-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const menuOverlay = document.querySelector('.menu-overlay');

    if (hamburger && navMenu && menuOverlay) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        
        menuOverlay.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    
    const tableRows = document.querySelectorAll('.requirements-table tbody tr, .costs-table tbody tr');
    tableRows.forEach(row => {
        
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
            
            
            if (element.textContent.includes('%')) {
                element.textContent = Math.round(current) + '%';
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }

    
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

    
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.getElementById('closeModal');
    const clickableImages = document.querySelectorAll('.clickable-image');

    
    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalCaption.textContent = ''; 
        });
    });

    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


window.addEventListener('resize', function() {
    
    const heroHeight = window.innerHeight * 0.6;
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        hero.style.minHeight = heroHeight + 'px';
    }
});
