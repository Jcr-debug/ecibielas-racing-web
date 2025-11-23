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

    // Product Carousel
    const productSlides = document.querySelectorAll('.product-slide');
    const productDots = document.querySelectorAll('.product-indicator .dot');
    const prevProductBtn = document.getElementById('prevProductBtn');
    const nextProductBtn = document.getElementById('nextProductBtn');
    let currentProductIndex = 0;

    // Construction Images Slideshow
    const constructionImages = document.querySelectorAll('.construction-image');
    const prevConstructionBtn = document.getElementById('prevConstructionBtn');
    const nextConstructionBtn = document.getElementById('nextConstructionBtn');
    const currentImageSpan = document.getElementById('currentImage');
    const totalImagesSpan = document.getElementById('totalImages');
    let currentConstructionIndex = 0;
    let constructionInterval = null;
    const autoPlayDelay = 2000; // 2 segundos entre imágenes

    // Forja Images Slideshow
    const forjaImages = document.querySelectorAll('.forja-image');
    const prevForjaBtn = document.getElementById('prevForjaBtn');
    const nextForjaBtn = document.getElementById('nextForjaBtn');
    const currentForjaImageSpan = document.getElementById('currentForjaImage');
    const totalForjaImagesSpan = document.getElementById('totalForjaImages');
    let currentForjaIndex = 0;
    let forjaInterval = null;

    function showConstructionImage(index) {
        if (constructionImages.length === 0) return;

        constructionImages.forEach((img, i) => {
            img.classList.remove('active');
        });

        constructionImages[index].classList.add('active');
        
        if (currentImageSpan) {
            currentImageSpan.textContent = index + 1;
        }
    }

    function nextConstructionImage() {
        if (currentConstructionIndex < constructionImages.length - 1) {
            currentConstructionIndex++;
        } else {
            currentConstructionIndex = 0; // Volver al inicio
        }
        showConstructionImage(currentConstructionIndex);
    }

    function prevConstructionImage() {
        if (currentConstructionIndex > 0) {
            currentConstructionIndex--;
        } else {
            currentConstructionIndex = constructionImages.length - 1; // Ir al final
        }
        showConstructionImage(currentConstructionIndex);
    }

    function startConstructionAutoplay() {
        stopConstructionAutoplay(); // Limpiar intervalo existente
        constructionInterval = setInterval(() => {
            nextConstructionImage();
        }, autoPlayDelay);
    }

    function stopConstructionAutoplay() {
        if (constructionInterval) {
            clearInterval(constructionInterval);
            constructionInterval = null;
        }
    }

    function showForjaImage(index) {
        if (forjaImages.length === 0) return;

        forjaImages.forEach((img, i) => {
            img.classList.remove('active');
        });

        forjaImages[index].classList.add('active');
        
        if (currentForjaImageSpan) {
            currentForjaImageSpan.textContent = index + 1;
        }
    }

    function nextForjaImage() {
        if (currentForjaIndex < forjaImages.length - 1) {
            currentForjaIndex++;
        } else {
            currentForjaIndex = 0; // Volver al inicio
        }
        showForjaImage(currentForjaIndex);
    }

    function prevForjaImage() {
        if (currentForjaIndex > 0) {
            currentForjaIndex--;
        } else {
            currentForjaIndex = forjaImages.length - 1; // Ir al final
        }
        showForjaImage(currentForjaIndex);
    }

    function startForjaAutoplay() {
        stopForjaAutoplay(); // Limpiar intervalo existente
        forjaInterval = setInterval(() => {
            nextForjaImage();
        }, autoPlayDelay);
    }

    function stopForjaAutoplay() {
        if (forjaInterval) {
            clearInterval(forjaInterval);
            forjaInterval = null;
        }
    }

    // Inicializar el slideshow de construcción
    if (constructionImages.length > 0) {
        if (totalImagesSpan) {
            totalImagesSpan.textContent = constructionImages.length;
        }
        
        // Mostrar la primera imagen
        showConstructionImage(0);
        
        // Agregar eventos a los botones
        if (prevConstructionBtn) {
            prevConstructionBtn.addEventListener('click', function(e) {
                e.preventDefault();
                prevConstructionImage();
                stopConstructionAutoplay();
                setTimeout(startConstructionAutoplay, 5000);
            });
        }
        
        if (nextConstructionBtn) {
            nextConstructionBtn.addEventListener('click', function(e) {
                e.preventDefault();
                nextConstructionImage();
                stopConstructionAutoplay();
                setTimeout(startConstructionAutoplay, 5000);
            });
        }
        
        // Iniciar autoplay inmediatamente
        startConstructionAutoplay();
    }

    // Inicializar el slideshow de forja
    if (forjaImages.length > 0) {
        if (totalForjaImagesSpan) {
            totalForjaImagesSpan.textContent = forjaImages.length;
        }
        
        // Mostrar la primera imagen
        showForjaImage(0);
        
        // Agregar eventos a los botones
        if (prevForjaBtn) {
            prevForjaBtn.addEventListener('click', function(e) {
                e.preventDefault();
                prevForjaImage();
                stopForjaAutoplay();
                setTimeout(startForjaAutoplay, 5000);
            });
        }
        
        if (nextForjaBtn) {
            nextForjaBtn.addEventListener('click', function(e) {
                e.preventDefault();
                nextForjaImage();
                stopForjaAutoplay();
                setTimeout(startForjaAutoplay, 5000);
            });
        }

        // Iniciar autoplay inmediatamente
        startForjaAutoplay();
    }

    function showProductSlide(index) {
        // Esta función ya no es necesaria con el nuevo diseño de galería
        // pero se mantiene para compatibilidad con el código existente
    }

    function nextProductSlide() {
        // Función legacy - ya no se usa
    }

    function prevProductSlide() {
        // Función legacy - ya no se usa
    }

    // Comentar navegación de producto que ya no existe
    /*
    if (nextProductBtn && prevProductBtn && productSlides.length > 0) {
        nextProductBtn.addEventListener('click', nextProductSlide);
        prevProductBtn.addEventListener('click', prevProductSlide);

        productDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentProductIndex = index;
                showProductSlide(currentProductIndex);
            });
        });

        showProductSlide(0);
    }
    */

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
    let modalUpdateInterval = null;

    function updateModalImage() {
        // Actualizar la imagen del modal con la imagen activa actual
        const activeConstructionImage = document.querySelector('.construction-image.active');
        const activeForjaImage = document.querySelector('.forja-image.active');
        
        if (activeConstructionImage && modalImage.classList.contains('construction-modal')) {
            modalImage.src = activeConstructionImage.src;
        } else if (activeForjaImage && modalImage.classList.contains('forja-modal')) {
            modalImage.src = activeForjaImage.src;
        }
    }

    function startModalUpdate(type) {
        stopModalUpdate();
        modalImage.classList.add(type + '-modal');
        updateModalImage();
        modalUpdateInterval = setInterval(updateModalImage, 100); // Actualizar frecuentemente
    }

    function stopModalUpdate() {
        if (modalUpdateInterval) {
            clearInterval(modalUpdateInterval);
            modalUpdateInterval = null;
        }
        modalImage.classList.remove('construction-modal', 'forja-modal');
    }

    
    clickableImages.forEach(img => {
        img.addEventListener('click', function(e) {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalCaption.textContent = ''; 
            
            // Determinar si es construcción o forja
            if (this.classList.contains('construction-image')) {
                startModalUpdate('construction');
            } else if (this.classList.contains('forja-image')) {
                startModalUpdate('forja');
            }
        });
    });

    
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        stopModalUpdate();
    });

    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            stopModalUpdate();
        }
    });

    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            stopModalUpdate();
        }
    });

    // Team Member Modal
    const teamModal = document.getElementById('teamMemberModal');
    const teamModalImage = document.getElementById('teamModalImage');
    const teamModalName = document.getElementById('teamModalName');
    const teamModalPosition = document.getElementById('teamModalPosition');
    const teamModalDescription = document.getElementById('teamModalDescription');
    const closeTeamModal = document.getElementById('closeTeamModal');

    // Descripciones extendidas para cada miembro
    const teamDescriptions = {
        'Giovanni Alexander Castellanos Forero': 'Profesional con amplia experiencia en el sector financiero e inversiones estratégicas. Ha liderado múltiples proyectos de crecimiento empresarial y cuenta con una sólida trayectoria en la identificación de oportunidades de negocio. Su visión estratégica ha sido fundamental para posicionar a Ecibielas Racing como una empresa competitiva en el mercado. Aporta conocimientos en gestión de recursos, análisis de mercado y desarrollo de alianzas comerciales que impulsan el crecimiento sostenible de la organización.',
        'Brayan Stiben Navas Silva': 'Estudiante de Ingeniería Mecánica con destacado desempeño académico y liderazgo en proyectos universitarios. Ha desarrollado competencias en diseño mecánico, análisis de sistemas y gestión de proyectos de manufactura. Su visión estratégica y capacidad para liderar equipos multidisciplinarios lo posicionan como Gerente General del proyecto. Cuenta con conocimientos en software de diseño CAD, análisis de elementos finitos y metodologías de gestión empresarial que aplica para asegurar la excelencia operativa del proyecto.',
        'Juan Manuel Muñoz Hernández': 'Estudiante de Ingeniería Mecánica con enfoque en gestión de proyectos y organización empresarial. Su formación académica incluye conocimientos en planificación estratégica, coordinación de equipos y seguimiento de indicadores de desempeño. Como Asistente de Gerente General, facilita la comunicación efectiva entre las diferentes áreas del proyecto y asegura el cumplimiento de los objetivos establecidos. Destaca por su capacidad organizativa y habilidad para implementar soluciones creativas ante los desafíos del proyecto.',
        'Arlex Santiago Farfán Cárdenas': 'Estudiante de Ingeniería Mecánica con especialización en análisis financiero y gestión de costos de manufactura. Posee conocimientos en elaboración de presupuestos, análisis de rentabilidad y control de recursos. Como Gerente Financiero, ha desarrollado sistemas de seguimiento de costos de producción y análisis económico del proyecto. Su formación le permite equilibrar las consideraciones técnicas con la viabilidad económica, asegurando la sostenibilidad financiera del emprendimiento.',
        'Juan Camilo Rondón Orjuela': 'Estudiante de Ingeniería Mecánica con interés en administración financiera y control de gestión. Su rol incluye el apoyo en la elaboración de reportes financieros, seguimiento de inversiones y análisis de costos de producción. Ha desarrollado habilidades en el manejo de herramientas de análisis económico y participa activamente en la planificación presupuestaria del proyecto. Su trabajo contribuye a mantener la transparencia y eficiencia en la gestión de recursos del equipo.',
        'Jair Alexander Real Hernández': 'Estudiante de Ingeniería Mecánica con pasión por el diseño y desarrollo de productos innovadores. Especializado en diseño asistido por computadora (CAD/CAM) y simulación de procesos de manufactura. Ha liderado el desarrollo del modelo 3D de la biela y las simulaciones de llenado en Magma. Su dominio de software especializado como SolidWorks, AutoCAD y herramientas de simulación permite crear diseños optimizados que cumplen con estándares industriales de calidad y eficiencia.',
        'Juan Diego Velandia Bedoya': 'Estudiante de Ingeniería Mecánica especializado en diseño mecánico y análisis estructural. Experto en modelado 3D, análisis de elementos finitos (FEA) y optimización de componentes. Su trabajo se centra en la validación técnica de los diseños mediante simulaciones computacionales avanzadas, asegurando que cada componente cumpla con las especificaciones de resistencia y durabilidad requeridas. Ha contribuido significativamente al desarrollo técnico del proyecto con análisis detallados de esfuerzos y deformaciones.',
        'John Sebastián Sánchez García': 'Estudiante de Ingeniería Mecánica con enfoque en procesos de manufactura y optimización de producción. Posee conocimientos en metodologías de producción eficiente, planeación de procesos y control de operaciones. Como Gerente de Producción, coordina las actividades de fabricación del proyecto y asegura la calidad en cada etapa del proceso. Su formación incluye técnicas de mejora continua y gestión de operaciones que aplica para optimizar tiempos y recursos en la manufactura.',
        'Cristian Camilo Roa': 'Estudiante de Ingeniería Mecánica con experiencia práctica en procesos de manufactura y operaciones de taller. Especializado en programación y operación de máquinas CNC, supervisión de procesos productivos y control de calidad en planta. Su conocimiento de las operaciones prácticas de manufactura y su capacidad para resolver problemas técnicos en tiempo real son fundamentales para el desarrollo exitoso del proyecto. Ha implementado mejoras en los procedimientos de fabricación que optimizan la eficiencia operativa.',
        'Luis Felipe Morantes Puentes': 'Estudiante de Ingeniería Mecánica con especialización en sistemas de gestión de calidad y metrología. Posee conocimientos en normas de calidad ISO, técnicas de control estadístico de procesos y métodos de inspección. Como Gerente de Calidad, diseña e implementa protocolos de control que aseguran el cumplimiento de especificaciones técnicas. Su formación incluye el manejo de instrumentos de medición de precisión y metodologías de mejora continua aplicadas al sector automotriz.',
        'Juan Pablo Salas Herreño': 'Estudiante de Ingeniería Mecánica con enfoque en control de calidad y metrología dimensional. Especializado en técnicas de inspección, uso de instrumentos de medición de alta precisión y análisis de tolerancias. Su trabajo incluye la verificación de especificaciones técnicas, documentación de resultados de inspección y propuesta de acciones correctivas. Ha desarrollado procedimientos de control que garantizan que cada componente fabricado cumpla con los estándares de calidad establecidos para el proyecto.'
    };

    // Agregar evento click a cada miembro del equipo
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.style.cursor = 'pointer';
        
        // Función para abrir el modal
        const openModal = function(e) {
            // Evitar que el click en el botón dispare el evento del contenedor
            if (e.target.classList.contains('read-more-btn')) {
                e.stopPropagation();
            }
            
            const img = member.querySelector('img');
            const name = member.querySelector('h3').textContent;
            const position = member.querySelector('.position').textContent;
            const description = teamDescriptions[name] || member.querySelector('.description').textContent;

            teamModalImage.src = img.src;
            teamModalName.textContent = name;
            teamModalPosition.textContent = position;
            teamModalDescription.textContent = description;

            teamModal.style.display = 'block';
        };
        
        // Click en la tarjeta completa
        member.addEventListener('click', openModal);
        
        // Click en el botón "Ver más..."
        const readMoreBtn = member.querySelector('.read-more-btn');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                openModal(e);
            });
        }
    });

    // Cerrar modal con el botón X
    closeTeamModal.addEventListener('click', function() {
        teamModal.style.display = 'none';
    });

    // Cerrar modal al hacer click fuera del contenido
    teamModal.addEventListener('click', function(e) {
        if (e.target === teamModal) {
            teamModal.style.display = 'none';
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && teamModal.style.display === 'block') {
            teamModal.style.display = 'none';
        }
    });

    // Expandable cost table rows
    const expandableRows = document.querySelectorAll('.expandable-row');
    
    expandableRows.forEach(row => {
        const handleExpand = function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            const detailRows = document.querySelectorAll('.' + target);
            const isExpanded = this.classList.contains('expanded');
            
            this.classList.toggle('expanded');
            
            detailRows.forEach(detailRow => {
                if (isExpanded) {
                    detailRow.style.display = 'none';
                } else {
                    detailRow.style.display = 'table-row';
                }
            });
        };
        
        // Soporte para click en desktop
        row.addEventListener('click', handleExpand);
        
        // Soporte para touch en móviles
        row.addEventListener('touchend', handleExpand);
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
