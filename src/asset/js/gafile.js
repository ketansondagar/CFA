export const initGA = () => {
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-DEFAULT-ID'; // fallback

  if (typeof window.gtag !== 'function') {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
  }

  // Generate or fetch a persistent user ID
  const userId = localStorage.getItem('user_id') || crypto.randomUUID();
  localStorage.setItem('user_id', userId);

  // Send config to Google Analytics
  window.gtag('config', measurementId, {
    'user_id': userId
  });
};