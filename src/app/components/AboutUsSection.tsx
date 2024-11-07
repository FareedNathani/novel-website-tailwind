"use client";
import { useState } from 'react';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  const [isUrdu, setIsUrdu] = useState(false); // State to track the current language

  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
    '/images/img5.jpg',
    '/images/img6.jpg'
  ];

  // Text content in English and Urdu
  const englishText = (
    <div className='border-2 p-4 rounded-lg hover:bg-slate-300 hover:text-black font-serif '>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-lg">
        Welcome to Dil Se Qalam, your ultimate destination for exploring the captivating world of novels.
        Our passion for storytelling drives us to bring you an extensive collection of literary works that inspire, entertain, and provoke thought.
        Whether you are a casual reader or a dedicated bibliophile, our carefully curated selection offers something for everyone.
        Join us on this literary journey and discover the magic of words!
      </p>
    </div>
  );

  const urduText = (
    <div className='border-2 p-4 rounded-lg font-serif hover:bg-slate-300 hover:text-black'>
      <h2 className="text-3xl font-bold mb-4">ہمارے بارے میں</h2>
      <p className="text-lg">
      دل سے قلم میں خوش آمدید، آپ کا حتمی مقام کہانیوں کی دلکشی کو دریافت کرنے کے لئے۔
        کہانی سنانے کا ہمارا شوق ہمیں آپ کے لئے ادبی کاموں کا ایک وسیع مجموعہ لانے کی ترغیب دیتا ہے جو متاثر کرتے ہیں، تفریح دیتے ہیں، اور سوچنے پر مجبور کرتے ہیں۔
        چاہے آپ ایک عام قاری ہوں یا ایک باقاعدہ بکیفیل، ہماری محتاط طور پر منتخب کردہ فہرست سب کے لئے کچھ نہ کچھ پیش کرتی ہے۔
        اس ادبی سفر میں ہمارے ساتھ شامل ہوں اور الفاظ کے جادو کو دریافت کریں!
      </p>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Image Grid Section */}
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="h-48 bg-gray-300 flex items-center justify-center">
            <Image src={src} alt={`Novel ${index + 1}`}
            width={200}
            height={200}
             className="object-cover h-full w-full shadow-md shadow-gray-500" />
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 p-4">
        {isUrdu ? urduText : englishText} 
        <button
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          onClick={() => setIsUrdu(!isUrdu)} // Toggle the language
        >
          {isUrdu ? 'Show in English' : 'Show in Urdu'}
        </button>
      </div>
    </div>
  );
};

export default AboutUsSection;