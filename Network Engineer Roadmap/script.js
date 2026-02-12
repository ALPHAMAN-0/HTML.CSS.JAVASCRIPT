// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved progress from localStorage
    loadProgress();
    
    // Open first phase by default
    togglePhase('phase1');
    
    // Update progress on initial load
    updateProgress();
});

/**
 * Toggle phase expand/collapse
 */
function togglePhase(phaseId) {
    const phaseContent = document.getElementById(phaseId);
    const phaseHeader = phaseContent.previousElementSibling;
    
    // Toggle active class
    phaseHeader.classList.toggle('active');
    phaseContent.classList.toggle('active');
}

/**
 * Update progress bar and percentage
 */
function updateProgress() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.topic input[type="checkbox"]');
    const totalTopics = checkboxes.length;
    let completedTopics = 0;
    
    // Count completed topics
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completedTopics++;
        }
    });
    
    // Calculate percentage
    const percentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    
    // Update UI
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    
    progressFill.style.width = percentage + '%';
    progressPercent.textContent = percentage;
    
    // Save progress to localStorage
    saveProgress();
    
    // Add celebration effect when 100% complete
    if (percentage === 100) {
        celebrateCompletion();
    }
}

/**
 * Save progress to localStorage
 */
function saveProgress() {
    const checkboxes = document.querySelectorAll('.topic input[type="checkbox"]');
    const progress = {};
    
    checkboxes.forEach(checkbox => {
        progress[checkbox.id] = checkbox.checked;
    });
    
    localStorage.setItem('networkEngineerProgress', JSON.stringify(progress));
}

/**
 * Load progress from localStorage
 */
function loadProgress() {
    const savedProgress = localStorage.getItem('networkEngineerProgress');
    
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        
        Object.keys(progress).forEach(checkboxId => {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) {
                checkbox.checked = progress[checkboxId];
            }
        });
    }
}

/**
 * Celebration effect when roadmap is complete
 */
function celebrateCompletion() {
    // Create confetti effect
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Create simple DOM-based confetti
        createConfetti(particleCount);
    }, 250);
    
    // Show congratulations message
    showCongratulationsMessage();
}

/**
 * Create simple confetti effect using DOM elements
 */
function createConfetti(count) {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.opacity = '1';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        // Animate confetti falling
        let pos = -10;
        let opacity = 1;
        const fallSpeed = Math.random() * 3 + 2;
        const drift = (Math.random() - 0.5) * 2;
        let leftPos = parseInt(confetti.style.left);
        
        const fall = setInterval(() => {
            pos += fallSpeed;
            leftPos += drift;
            opacity -= 0.01;
            
            confetti.style.top = pos + 'px';
            confetti.style.left = leftPos + 'px';
            confetti.style.opacity = opacity;
            
            if (pos > window.innerHeight || opacity <= 0) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 20);
    }
}

/**
 * Show congratulations message
 */
function showCongratulationsMessage() {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    message.style.color = 'white';
    message.style.padding = '40px 60px';
    message.style.borderRadius = '20px';
    message.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
    message.style.zIndex = '10000';
    message.style.textAlign = 'center';
    message.style.fontSize = '1.5em';
    message.style.fontWeight = 'bold';
    message.innerHTML = '🎉 Congratulations! 🎉<br><br>You\'ve completed the Network Engineer Roadmap!<br><br>🚀 Keep learning and growing! 🚀';
    
    document.body.appendChild(message);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.style.transition = 'opacity 1s';
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 1000);
    }, 5000);
}

/**
 * Reset all progress (optional feature)
 */
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('networkEngineerProgress');
        
        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll('.topic input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Update progress
        updateProgress();
        
        alert('Progress has been reset!');
    }
}

/**
 * Export progress as JSON (optional feature)
 */
function exportProgress() {
    const savedProgress = localStorage.getItem('networkEngineerProgress');
    
    if (savedProgress) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(savedProgress);
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "network_engineer_progress.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    } else {
        alert('No progress to export!');
    }
}

/**
 * Import progress from JSON file (optional feature)
 */
function importProgress(event) {
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const progress = JSON.parse(e.target.result);
                localStorage.setItem('networkEngineerProgress', JSON.stringify(progress));
                loadProgress();
                updateProgress();
                alert('Progress imported successfully!');
            } catch (error) {
                alert('Error importing progress. Please check the file format.');
            }
        };
        reader.readAsText(file);
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Press 'R' to reset (with Ctrl/Cmd)
    if ((event.ctrlKey || event.metaKey) && event.key === 'r') {
        event.preventDefault();
        resetProgress();
    }
    
    // Press 'E' to export (with Ctrl/Cmd)
    if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        event.preventDefault();
        exportProgress();
    }
});

// Make functions available globally
window.togglePhase = togglePhase;
window.updateProgress = updateProgress;
window.resetProgress = resetProgress;
window.exportProgress = exportProgress;
window.importProgress = importProgress;
