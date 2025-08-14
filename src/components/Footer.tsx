import React from 'react';
import TwitterIcon from '../assets/contact/Twitter White.svg';
import YoutubeIcon from '../assets/contact/Youtube White.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Main Section */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start px-6 md:px-10 gap-6 md:gap-0">
        {/* Company Info */}
        <div className="text-center md:text-left text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-1">Ceylon Guide (Pvt) Ltd</h3>
          <p>No.35/6/C,</p>
          <p>Sri Sambodhi Road,</p>
          <p>Colombo 7</p>
          <p>Sri Lanka</p>
        </div>

        {/* Follow Us */}
        <div className="text-center md:text-left text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-2">Follow us on</h3>
          <ul className="flex flex-row md:flex-col justify-center md:justify-start gap-3 md:gap-2">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-white hover:text-yellow-400 transition-colors"
              >
                <img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-white hover:text-yellow-400 transition-colors"
              >
                <img src={YoutubeIcon} alt="YouTube" className="w-5 h-5" />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Licence and Credits */}
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center text-xs md:text-sm mt-8 px-6 md:px-10 border-t border-gray-800 pt-4 gap-2 md:gap-0 text-center">
        <p>© 2025 Ceylon Guide. All rights reserved.</p>
        <p>Photos by Felix Mooneeram & Serge Kutuzov on Unsplash</p>
      </div>
    </footer>
  );
};
