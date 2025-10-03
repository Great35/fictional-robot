// Show toast notification
function showToast(message, isError = true) {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: isError ? "#3b82f6" : "#10b981", // Blue for errors, green for success
        className: "text-sm sm:text-base font-medium rounded-lg shadow-md",
    }).showToast();
}

// Initialize feather icons and card animations
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
    const cards = document.querySelectorAll('.animate-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 * (index + 1)}s`;
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
            this.style.transform = 'translateY(0)';
        });
    });
});