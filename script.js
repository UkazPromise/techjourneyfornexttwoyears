document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
    
        // Convert the time to UTC+1 (West African Time)
        const utcOffset = 1; // WAT is UTC+1
        const watTime = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);
    
        // Extract hours, minutes, and seconds
        const hours = watTime.getUTCHours().toString().padStart(2, '0');
        const minutes = watTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = watTime.getUTCSeconds().toString().padStart(2, '0');
    
        const watTimeString = `${hours}:${minutes}:${seconds}`;
        const dayOfWeek = watTime.toLocaleDateString('en-US', { weekday: 'long' });
    
        console.log('Updating time:', watTimeString);
        console.log('Updating day:', dayOfWeek);
    
        document.getElementById('utcTime').textContent = watTimeString;
        document.getElementById('currentDay').textContent = dayOfWeek;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded and parsed');
        updateTimeAndDay();
        setInterval(updateTimeAndDay, 1000); // Update every second
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
