import Image from "next/image";
import Link from "next/link";
import HeroSecCard from "./HeroSecCard";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-10 my-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-black mb-4">
            Welcome to Dil Se Qalam
          </h1>
          <p className="text-black text-lg mb-6">
            Dive into the world of captivating love stories and mesmerizing
            afsanay. Explore a collection of heart-touching novels that will
            keep you hooked till the very end. Join us in this journey through
            emotions, romance, and unforgettable tales.
          </p>
          <a
            href="/novels"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-black transition duration-300"
          >
            Explore Novels
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/home.jpg"
            alt="Hero Section Image"
            height={400}
            width={400}
            className="rounded-lg shadow-lg w-[70%] h-[50%] border-y-2 border-gray-600 p-4"
          />
        </div>
      </div>

      {/* Famous Novels Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-black text-center mb-10">
          Famous Novels
        </h2>

        {/* Grid of Novel Cards */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {/* Peer-e-Kamil by Umera Ahmed */}
          <HeroSecCard
            title="Peer-e-Kamil"
            author="Umera Ahmed"
            description="یہ کہانی دو روحوں کی روحانی سفر ہے جو اپنی زندگی کا مقصد تلاش کر رہی ہیں۔"
            image="/images/peer-e-kamil.jpg"
            pdf="https://www.mediafire.com/file/cxrxbemap59etis/Pir_e_Kamil_By_Umera_Ahmed.pdf/file"
            onlineRead="https://drive.google.com/file/d/1Wqdlesxd_bteUF8EKZ9VevTZN6OE7dta/view"
          />

          {/* Jannat K Pattay by Nimra Ahmed */}
          <HeroSecCard
            title="Jannat K Pattay"
            author="Nimra Ahmed"
            description="ایک سنسنی خیز کہانی، جو محبت، مہم جوئی اور خود دریافت کے گرد گھومتی ہے۔"
            image="/images/jannat-k-pattay.jpg"
            pdf="https://www.mediafire.com/file/lxhyw40kblqik2m/Jannat_Ke_Pattay_novel_complete_by_NimraAhmed.pdf/file"
            onlineRead="https://drive.google.com/file/d/1nHC5-qSqao13hQ-89K-nDrzD-1MwywEq/view"
          />

          {/* Rooh-e-Yaram by Areej Shah */}
          <HeroSecCard
            title="Rooh-e-Yaram"
            author="Areej Shah"
            description="ایک پرجوش اور شدت پسند محبت کی کہانی جو جذبات کی گہرائیوں کو تلاش کرتی ہے۔"
            image="/images/rooh-e-yaram.jpg"
            pdf="https://play.google.com/store/apps/details?id=com.kitabnagri.rooh_e_yaram_novel"
            onlineRead="https://drive.google.com/file/d/1JVAICcJlJRTbuTqBKNmdh9pOh1P4t-pW/view"
          />
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-10">
          <Link
            href="/novels"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-black transition duration-300"
          >
            Explore More Novels
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
