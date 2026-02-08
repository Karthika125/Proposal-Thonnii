// ========== GLOBAL STATE ==========
let currentPage = 0;
const pages = document.querySelectorAll('.page');
let isVideoPlaying = false;
let musicEnabled = true;

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeHearts();
    initializeMusic();
    initializeEnvelope();
    initializeNavigation();
});

// ========== FLOATING HEARTS ANIMATION ==========
function initializeHearts() {
    const container = document.querySelector('.hearts-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random starting position
        const startX = Math.random() * window.innerWidth;
        heart.style.left = startX + 'px';
        
        // Random emoji
        const hearts = ['💕', '💖', '❤️'];
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random delay
        const delay = Math.random() * 2;
        heart.style.animationDelay = delay + 's';
        
        // Random duration for variation
        const duration = 6 + Math.random() * 3;
        heart.style.animationDuration = duration + 's';
        
        container.appendChild(heart);
        
        // Remove after animation completes
        setTimeout(() => {
            heart.remove();
        }, (duration + delay) * 1000);
    }
    
    // Create hearts continuously
    setInterval(() => {
        if (Math.random() > 0.3) {
            createHeart();
        }
    }, 500);
}

// ========== MUSIC CONTROL ==========
function initializeMusic() {
    const audio = document.getElementById('bgMusic');
    const toggle = document.getElementById('musicToggle');
    
    // Try to autoplay
    audio.volume = 0.3;
    audio.play().catch(() => {
        // Autoplay prevented, user needs to interact
        console.log('Autoplay prevented');
    });
    
    toggle.addEventListener('click', () => {
        if (musicEnabled) {
            audio.pause();
            toggle.classList.add('muted');
            musicEnabled = false;
        } else {
            audio.play();
            toggle.classList.remove('muted');
            musicEnabled = true;
        }
    });
}

// ========== ENVELOPE INTERACTION ==========
function initializeEnvelope() {
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
        
        // Show instruction text
        setTimeout(() => {
            const instructionText = document.querySelector('.instruction-text');
            if (instructionText) {
                instructionText.style.display = 'block';
            }
        }, 2000);
        
        // Auto-transition to next page after 5 seconds
        setTimeout(() => {
            goToNextPage();
        }, 5000);
    });
}

// ========== PAGE NAVIGATION ==========
function goToNextPage() {
    pages[currentPage].classList.remove('active');
    currentPage++;
    
    if (currentPage < pages.length) {
        pages[currentPage].classList.add('active');
    }
}

function skipToPage(pageNumber) {
    pages[currentPage].classList.remove('active');
    currentPage = pageNumber;
    
    if (currentPage < pages.length) {
        pages[currentPage].classList.add('active');
    }
}

function initializeNavigation() {
    // Page 2: Timeline Video Button
    const videoButtonTimeline = document.getElementById('videoButtonTimeline');
    const videoPlayerTimeline = document.getElementById('videoPlayerTimeline');
    const proposalVideoTimeline = document.getElementById('proposalVideoTimeline');
    const videoInstruction = document.getElementById('videoInstruction');
    const timelineNextBtn = document.getElementById('timelineNextBtn');
    
    if (videoButtonTimeline) {
        videoButtonTimeline.addEventListener('click', () => {
            console.log('Video button clicked');
            videoButtonTimeline.style.display = 'none';
            videoPlayerTimeline.style.display = 'block';
            
            // Ensure video is ready and play
            if (proposalVideoTimeline) {
                proposalVideoTimeline.currentTime = 0; // Reset to start
                const playPromise = proposalVideoTimeline.play();
                
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Video play error:', error);
                        // Fallback: try playing again
                        setTimeout(() => {
                            proposalVideoTimeline.play();
                        }, 500);
                    });
                }
            }
        });
    }
    
    if (proposalVideoTimeline) {
        proposalVideoTimeline.addEventListener('play', () => {
            // Hide Next button when video starts
            if (timelineNextBtn) {
                timelineNextBtn.style.display = 'none';
            }
        });
        
        proposalVideoTimeline.addEventListener('ended', () => {
            // Show Next button and instruction when video ends
            if (videoInstruction) {
                videoInstruction.style.display = 'block';
            }
            if (timelineNextBtn) {
                timelineNextBtn.style.display = 'block';
            }
        });
    }
    
    // Page 2: Timeline Next Button
    if (timelineNextBtn) {
        timelineNextBtn.addEventListener('click', () => {
            skipToPage(3); // Skip to page 4 (proposal)
        });
    }
    
    // Page 4: YES Buttons
    const yesBtn = document.getElementById('yesBtn');
    const ysssBtn = document.getElementById('ysssBtn');
    const confirmationText = document.getElementById('confirmationText');
    
    const handleYes = () => {
        // Hide buttons
        document.querySelector('.button-group').style.display = 'none';
        
        // Show confirmation
        confirmationText.style.display = 'block';
        
        // Trigger confetti
        createConfetti();
        
        // Increase hearts intensity
        increaseHeartIntensity();
    };
    
    if (yesBtn) yesBtn.addEventListener('click', handleYes);
    if (ysssBtn) ysssBtn.addEventListener('click', handleYes);
}

// ========== CONFETTI EFFECT ==========
function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 4 + 2,
            life: 1,
            decay: Math.random() * 0.01 + 0.015,
            emoji: ['❤️', '💕', '💖', '🎉', '✨'][Math.floor(Math.random() * 5)],
            size: Math.random() * 20 + 15,
            rotation: Math.random() * Math.PI * 2,
            rotationVel: (Math.random() - 0.5) * 0.1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let hasParticles = false;
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            
            if (p.life > 0) {
                hasParticles = true;
                
                // Update position
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.1; // gravity
                
                // Update rotation
                p.rotation += p.rotationVel;
                
                // Decay
                p.life -= p.decay;
                
                // Draw
                ctx.save();
                ctx.globalAlpha = p.life;
                ctx.font = `${p.size}px Arial`;
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.emoji, 0, 0);
                ctx.restore();
            }
        }
        
        if (hasParticles) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// ========== INCREASE HEART INTENSITY ==========
function increaseHeartIntensity() {
    const container = document.querySelector('.hearts-container');
    
    // Create more hearts for a short period
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const startX = Math.random() * window.innerWidth;
        heart.style.left = startX + 'px';
        
        const hearts = ['💕', '💖', '❤️'];
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const delay = i * 0.1;
        heart.style.animationDelay = delay + 's';
        heart.style.animationDuration = '4s';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4500);
    }
}

// ========== RESPONSIVE CANVAS ==========
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ========== TOUCH & MOBILE SUPPORT ==========
document.addEventListener('touchstart', () => {
    const audio = document.getElementById('bgMusic');
    if (audio.paused && musicEnabled) {
        audio.play().catch(err => console.log('Audio play failed'));
    }
}, { once: true });
