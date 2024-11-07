import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-8 flex-wrap mb-10">
          <a
            href="https://www.linkedin.com/in/fareed-nathani-30180a324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className='mt-6'/>
          </a>
          <a
            href="mailto:fareednathani123@gmail.com"
            className="text-2xl text-white hover:text-blue-800 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope className='mt-6'/>
          </a>
          <a
            href="https://github.com/FareedNathani/portfolio-next.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-black transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub className='mt-6'/>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-sm mb-10">
          
          {/* FAQ Section - Customized for Novels Website */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg mb-4">FAQ</h2>
            <ul>
              <li><a href="/faq" className="hover:underline hover:text-white transition duration-300">What is Ishq Aur Afsanay?</a></li>
              <li><a href="/faq" className="hover:underline hover:text-white transition duration-300">How do I start reading novels?</a></li>
              <li><a href="/faq" className="hover:underline hover:text-white transition duration-300">Can I submit my own stories?</a></li>
            </ul>
          </div>

          {/* Navbar Links Section - Replacing Categories */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg mb-4">Navigation</h2>
            <ul>
              <li><a href="/" className="hover:underline hover:text-white transition duration-300">Home</a></li>
              <li><a href="/aboutUs" className="hover:underline hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/novels" className="hover:underline hover:text-white transition duration-300">Novels</a></li>
              <li><a href="/contactUs" className="hover:underline hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div className="text-center sm:text-left">
            <h2 className="font-semibold text-lg mb-4">Links</h2>
            <ul>
              <li><a href="/privacy-policy" className="hover:underline hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:underline hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="/contact" className="hover:underline hover:text-white transition duration-300">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* All Rights Reserved */}
        <div className="text-center text-sm text-white">
          &copy; 2024 Fareed Nathani | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;