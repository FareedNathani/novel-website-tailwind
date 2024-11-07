
const ContactSection: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-lg shadow-lg border-2">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-md text-white font- font-serif">Full Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block  text-white font-serif text-md">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black  shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white font-serif text-md">Message</label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            placeholder="Write your message"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg hover:bg-black transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;