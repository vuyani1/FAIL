document.addEventListener('DOMContentLoaded', function () {
    // Fetch active users
    fetch('/api/active-users')
        .then(response => response.json())
        .then(data => {
            document.getElementById('active-users').textContent = data.active_users;
        })
        .catch(err => console.error('Error fetching active users:', err));

    // Generate embed code
    const embedCode = '<script src="https://example.com/snippet.js" data-key="YOUR_API_KEY"></script>';
    document.getElementById('embed-code').textContent = embedCode;
});