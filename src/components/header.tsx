import { FaPhone } from "react-icons/fa";
import MainLogo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="w-full bg-white shadow-[-1px_12px_23px_-4px_rgba(0,_0,_0,_0.2)] sticky top-0 right-0 z-50">
      <div className="custom-container py-2 flex flex-wrap items-center justify-between w-full gap-3 ">
      
        <div className="flex items-center gap-3">
          <a target="_blank" href="https://asianuniversity.uz/uz">
            <img
            src={MainLogo}
            alt="University Canada West"
            className="w-[140px] h-[40px] sm:w-[200px] sm:h-[70px] md:w-[240px] md:h-[80px] object-cover"
          />
          </a>
        
        </div>

        
        <a
          href="tel:+998554041166"
          className="relative h-10 w-fit px-6 overflow-hidden 
            bg-gradient-to-r from-blue-700 to-[#050556] 
            text-white text-[16px] sm:text-[18px] md:text-[20px] 
            flex items-center gap-2 rounded-full transition-all shadow-2xl 
            before:absolute before:right-0 before:top-0 before:h-12 before:w-6 
            before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 
            before:duration-700 hover:before:-translate-x-40"
        >
          <span className="relative z-10 flex items-center gap-2">
            Call Center <FaPhone className="text-base sm:text-lg" />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
