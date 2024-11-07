import ContactSection from '../components/ContactSection';

const ContactUs: React.FC = () => {
  return (
    <div style={{backgroundImage:`url(./images/contact-bg.jpg)`}} className='bg-cover'>
      <main className="flex flex-col items-center justify-center min-h-screen  p-4">
        <h1 className="text-3xl font-bold mb-6 text-black">Get in Touch</h1>
        <ContactSection />
      </main>
    </div>
  );
};

export default ContactUs;