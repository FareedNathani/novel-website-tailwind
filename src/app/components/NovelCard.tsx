import Image from "next/image";
import { NovelCardProps } from "../../../types/componentTypes"; 

const NovelCard: React.FC<NovelCardProps> = ({ title, author, description, image, pdf, onlineRead }) => {
  return (
    <div className="bg-gray-100 border p-4 rounded-lg shadow-lg flex flex-col items-center w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] mx-auto transition-transform transform hover:scale-105 h-auto m-6">
      <Image
        src={image}
        alt={`${title} Cover`}
        width={200}
        height={200}
        className="rounded mb-4 shadow-md object-cover w-[70%] h-[auto] md:w-[60%] md:h-auto"
      />
      <h3 className="text-lg md:text-xl font-bold mb-2 text-black text-center">{title}</h3>
      <p className="italic text-black mb-4 text-center text-sm md:text-base">by {author}</p>
      <p className="bg-gray-300 text-black mb-4 font-mono text-center font-bold rounded p-2 text-sm md:text-base">{description}</p>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0">
        <a
          href={onlineRead}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-black transition duration-300 font-serif text-center"
        >
          Read Online
        </a>
        <a
          href={pdf}
          download
          className="bg-transparent text-black font-bold border-2 border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300 font-serif text-center"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default NovelCard;