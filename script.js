document.querySelector('.landing').addEventListener('click', function() {
    this.style.opacity = '0';
    document.querySelector('.sidebar').style.transform = 'translateX(0)';
    document.querySelector('.content').style.opacity = '1';
    
    // Hide landing page after transition
    setTimeout(() => {
        this.classList.add('hidden');
    }, 500);
});

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
