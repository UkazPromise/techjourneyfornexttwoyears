document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
    
        const utcOffset = 1;
        const watTime = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);

        const hours = watTime.getUTCHours().toString().padStart(2, '0');
        const minutes = watTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = watTime.getUTCSeconds().toString().padStart(2, '0');
    
        const watTimeString = `${hours}:${minutes}:${seconds}`;
        const dayOfWeek = watTime.toLocaleDateString('en-US', { weekday: 'long' });
    
        document.getElementById('utcTime').textContent = watTimeString;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        updateTimeAndDay();
        setInterval(updateTimeAndDay, 1000); 
    });
    
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
