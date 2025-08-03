// Modern Portfolio JavaScript - Enhanced Version
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    initializeTheme();
    
    // Initialize all components
    initializeAOS();
    initializeParticles();
    initializeTyped();
    initializeCounters();
    initializeNavigation();
    initializeDarkMode();
    initializePortfolioFilter();
    initializeSkillBars();
    initializeSmoothScrolling();
    initializeBackToTop();
    initializeContactForm();
    initializeGSAP();
    initializeCustomCursor();
    initializePerformanceOptimizations();
    initializeLoadingScreen();
    initializePortfolioVisibility();
    
    // Window load event
    window.addEventListener('load', function() {
        hideLoadingScreen();
    });
});

// Theme Management - Enhanced with better compatibility
function initializeTheme() {
    // Use in-memory storage instead of localStorage
    let savedTheme = 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    updateTypedCursorColor(savedTheme);
}

function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcon(newTheme);
            updateTypedCursorColor(newTheme);
            enhanceThemeTransition();
            
            // Add transition effect for smooth theme switching
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#darkModeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun text-xl' : 'fas fa-moon text-xl';
    }
}

function updateTypedCursorColor(theme) {
    // Update typed.js cursor color for theme compatibility
    const cursor = document.querySelector('.typed-cursor');
    if (cursor) {
        cursor.style.color = theme === 'dark' ? '#f8fafc' : '#1e293b';
    }
}

// AOS Animation
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic',
            disable: function() {
                const maxWidth = 768;
                return window.innerWidth < maxWidth;
            }
        });
    }
}

// Particles.js - Enhanced for theme compatibility
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        const isDesktop = window.innerWidth > 768;
        const particleCount = isDesktop ? 80 : 40;
        
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: particleCount, 
                    density: { enable: true, value_area: 800 } 
                },
                color: { value: "#ffffff" },
                shape: { 
                    type: "circle",
                    stroke: { width: 0, color: "#ffffff" }
                },
                opacity: { 
                    value: 0.3, 
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: { 
                    value: 3, 
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
                },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: "#ffffff", 
                    opacity: 0.2, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: isDesktop ? 2 : 1, 
                    direction: "none", 
                    random: true, 
                    straight: false, 
                    out_mode: "out", 
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: { 
                    onhover: { enable: isDesktop, mode: "repulse" }, 
                    onclick: { enable: true, mode: "push" }, 
                    resize: true 
                },
                modes: { 
                    grab: { distance: 400, line_linked: { opacity: 1 } }, 
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, 
                    repulse: { distance: 200, duration: 0.4 }, 
                    push: { particles_nb: 4 }, 
                    remove: { particles_nb: 2 } 
                }
            },
            retina_detect: true
        });
        
        // Update particles on theme change
        const themeObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-theme') {
                    updateParticlesColor();
                }
            });
        });
        
        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
}

function updateParticlesColor() {
    const color = "#ffffff"; // Keep white particles for gradient background
    
    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
        window.pJSDom[0].pJS.particles.color.value = color;
        window.pJSDom[0].pJS.particles.line_linked.color = color;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Typed.js - Enhanced with theme color compatibility
function initializeTyped() {
    if (typeof Typed !== 'undefined') {
        const typedElement = document.getElementById('typed-text');
        if (typedElement) {
            new Typed('#typed-text', {
                strings: ['John Doe', 'Full Stack Developer', 'UI/UX Designer', 'Creative Thinker'],
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|',
                contentType: 'text',
                onComplete: function(self) {
                    updateTypedCursorColor(document.documentElement.getAttribute('data-theme'));
                }
            });
        }
    }
}

// Counter Animation
function initializeCounters() {
    function animateCounter(element, start, end, duration, suffix = '') {
        if (!element) return;
        
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current + suffix;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const projectsCounter = document.getElementById('projects-counter');
                const experienceCounter = document.getElementById('experience-counter');
                const clientsCounter = document.getElementById('clients-counter');
                
                if (projectsCounter && !projectsCounter.dataset.animated) {
                    animateCounter(projectsCounter, 0, 50, 2000, '+');
                    projectsCounter.dataset.animated = 'true';
                }
                
                if (experienceCounter && !experienceCounter.dataset.animated) {
                    animateCounter(experienceCounter, 0, 5, 1500, '+');
                    experienceCounter.dataset.animated = 'true';
                }
                
                if (clientsCounter && !clientsCounter.dataset.animated) {
                    animateCounter(clientsCounter, 0, 30, 2500, '+');
                    clientsCounter.dataset.animated = 'true';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroSection = document.querySelector('#home');
    if (heroSection) observer.observe(heroSection);
}

// Navigation - Enhanced to prevent menu shifting
function initializeNavigation() {
    const navbar = document.querySelector('.navbar-scroll');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Navbar scroll effect
    let ticking = false;
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');

        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        }
    });

    document.addEventListener('click', function (e) {
        if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        }
    });
    }

}

// Portfolio Filter - Enhanced to show projects properly
function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length === 0 || portfolioItems.length === 0) return;
    
    // Initially show all items
    portfolioItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-emerald-600', 'text-white');
                btn.classList.add('hover:bg-emerald-600', 'hover:text-white');
            });
            
            // Add active class to clicked button
            this.classList.add('bg-emerald-600', 'text-white');
            this.classList.remove('hover:bg-emerald-600', 'hover:text-white');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach((item, index) => {
                const itemClasses = item.classList;
                let shouldShow = false;
                
                if (filterValue === 'all') {
                    shouldShow = true;
                } else if (itemClasses.contains(filterValue)) {
                    shouldShow = true;
                }
                
                if (shouldShow) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, index * 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const currentWidth = skillBar.style.width;
                
                if (currentWidth && !skillBar.classList.contains('animated')) {
                    // Reset and animate
                    skillBar.style.width = '0%';
                    skillBar.style.transition = 'width 1.5s ease-out';
                    
                    setTimeout(() => {
                        skillBar.style.width = currentWidth;
                        skillBar.classList.add('animated');
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    const mobileToggle = document.getElementById('mobileMenuToggle');
                    if (mobileToggle) {
                        const icon = mobileToggle.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });
}

// Back to Top Button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.pointerEvents = 'auto';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.pointerEvents = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
            
            // Basic validation
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                showNotification('Please fill in all required fields!', 'error');
                return;
            }
            
            // Email validation
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    showNotification('Invalid email format!', 'error');
                    emailInput.style.borderColor = '#ef4444';
                    return;
                }
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showNotification('Message sent successfully! I will respond as soon as possible.', 'success');
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Reset border colors
                inputs.forEach(input => {
                    input.style.borderColor = '';
                });
            }, 2000);
        });
    }
}

// GSAP Animations - Enhanced
function initializeGSAP() {
    if (typeof gsap !== 'undefined') {
        // Hero section animation
        gsap.from('.hero-text', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.3
        });
        
        // Register ScrollTrigger plugin if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            // Enhanced project card animations - ensure they appear on scroll
            gsap.utils.toArray('.project-card').forEach((card, index) => {
                gsap.fromTo(card, 
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.9
                    },
                    {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'bottom 15%',
                            toggleActions: 'play none none reverse',
                            once: true
                        },
                        duration: 0.8,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        delay: index * 0.1,
                        ease: 'power2.out'
                    }
                );
            });
            
            // Section title animations
            gsap.utils.toArray('section h2').forEach((title) => {
                gsap.fromTo(title,
                    {
                        y: 30,
                        opacity: 0
                    },
                    {
                        scrollTrigger: {
                            trigger: title,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        },
                        duration: 0.6,
                        y: 0,
                        opacity: 1,
                        ease: 'power2.out'
                    }
                );
            });
        }
    }
}

// Custom Cursor
function initializeCustomCursor() {
    const cursor = document.getElementById('cursor');
    const cursorOutline = document.getElementById('cursor-outline');
    
    if (cursor && cursorOutline && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
            cursor.style.opacity = '1';
        });
        
        function updateCursorOutline() {
            outlineX += (mouseX - outlineX) * 0.1;
            outlineY += (mouseY - outlineY) * 0.1;
            
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            cursorOutline.style.opacity = '1';
            
            requestAnimationFrame(updateCursorOutline);
        }
        
        updateCursorOutline();
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .project-card, .card-hover');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursorOutline.style.transform = 'scale(1.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursorOutline.style.transform = 'scale(1)';
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        });
    }
}

// Performance Optimizations
function initializePerformanceOptimizations() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Additional scroll-based optimizations can be added here
        }, 100);
    });
    
    // Preload critical images
    const heroImage = document.querySelector('#home img');
    if (heroImage && !heroImage.complete) {
        heroImage.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    }
}

// Loading Screen
function initializeLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-overlay');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-overlay');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// Enhanced portfolio item visibility on scroll
function initializePortfolioVisibility() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
}

// Enhanced navigation highlighting
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-emerald-600');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('text-emerald-600');
        }
    });
}

// Enhanced theme switching for better visual feedback
function enhanceThemeTransition() {
    const body = document.body;
    body.classList.add('theme-transitioning');
    
    setTimeout(() => {
        body.classList.remove('theme-transitioning');
    }, 300);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        padding: 16px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-size: 14px;
        line-height: 1.4;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, type === 'success' ? 4000 : 3000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add scroll spy for navigation with throttling
window.addEventListener('scroll', throttle(updateActiveNavigation, 100));

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced Portfolio loaded successfully!');
    
    // Add CSS for theme transitions
    const style = document.createElement('style');
    style.textContent = `
        .theme-transitioning * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
        }
    `;
    document.head.appendChild(style);
});