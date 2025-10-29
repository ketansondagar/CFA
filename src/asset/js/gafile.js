window.addEventListener('beforeunload', function () {
      localStorage.clear();
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    // Use sessionStorage instead of localStorage for temporary user ID
    const userId = sessionStorage.getItem('user_id') || crypto.randomUUID();
    sessionStorage.setItem('user_id', userId);

    // Send it to Google Analytics
    gtag('config', 'G-8Q7MHWN8VH', {
      'user_id': userId
    });