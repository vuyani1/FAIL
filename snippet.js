(function () {
    const userDetails = {
        ip: '127.0.0.1', // Placeholder for IP; requires backend to fetch real IP
        device: navigator.userAgent,
    };
    fetch('https://example.com/api/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userDetails),
    }).catch(err => console.error('Error logging details:', err));
})();