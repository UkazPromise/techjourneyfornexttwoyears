document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('utcTime').textContent = utcTime;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 60000); // Update every minute

    // Toggle content visibility
    const toggleContents = document.querySelectorAll('.toggle-content');

    toggleContents.forEach(content => {
        const img = content.querySelector('img');
        const p = content.querySelector('p');

        img.addEventListener('click', function() {
            if (p.style.display === 'none' || p.style.display === '') {
                p.style.display = 'block';
            } else {
                p.style.display = 'none';
            }
        });
    });
});
