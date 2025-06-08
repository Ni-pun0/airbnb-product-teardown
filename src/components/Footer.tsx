
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-airbnb-light_gray py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <svg className="h-8 w-8 text-airbnb mx-auto mb-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 0C12.0002 0 5.99805 5.89258 5.99805 12C5.99805 18.1074 9.89586 22 12.0002 22C14.1045 22 18.002 18.1074 18.002 12C18.002 5.89258 12.0002 0 12.0002 0ZM12.0002 19C11.0481 19 10.2579 18.2098 10.2579 17.2578C10.2579 16.3057 11.0481 15.5156 12.0002 15.5156C12.9522 15.5156 13.7424 16.3057 13.7424 17.2578C13.7424 18.2098 12.9522 19 12.0002 19ZM15.2424 10.8984C14.5159 11.625 13.7772 12 12.9639 12C12.1506 12 11.4119 11.625 10.6854 10.8984C9.95898 10.1719 9.58398 9.43324 9.58398 8.61992C9.58398 7.80661 9.95898 7.06792 10.6854 6.34145C11.4119 5.61499 12.1506 5.23999 12.9639 5.23999C13.7772 5.23999 14.5159 5.61499 15.2424 6.34145C15.9688 7.06792 16.3438 7.80661 16.3438 8.61992C16.3438 9.43324 15.9688 10.1719 15.2424 10.8984Z" />
        </svg>
        <p className="text-airbnb-gray mb-2">Airbnb Product Teardown © 2025</p>
        <p className="text-sm text-airbnb-gray">This is a conceptual product analysis for educational purposes only. All trademarks belong to their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;
