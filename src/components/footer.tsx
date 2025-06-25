import InstaIcon from "../assets/insta.png"
import TelegramIcon from "../assets/tg-icon.png"
import YouTubeIcon from "../assets/youtube 1.png"
import LinkedInIcon from "../assets/Linkedin.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-800 to-[#050556] text-white pt-12 pb-6 px-4">
      <div>
        <div className="custom-container grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center text-sm md:text-base">
          {/* Intakes Section */}
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-2 text-lg">Qo'shimcha ma'lumotlar</h4>
            <div className="flex flex-col items-center text-lg space-y-2">
              <Link
                target="_blank"
                to="https://asianuniversity.uz/uz/admission/education-directions-prices"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Ta'lim dasturlari
              </Link>
              <Link
                target="_blank"
                to="https://asianuniversity.uz/uz/admission/faqs"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Ko'p beriladigan savollar
              </Link>
              <Link
                target="_blank"
                to="https://asianuniversity.uz/uz/university/regulatory-documents"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                Litsenziya
              </Link>
            </div>
          </div>

          {/* Delivery Section */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-5 text-lg">
              <Link
                target="_blank"
                to="https://t.me/asianuniversity_edu"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={TelegramIcon || "/placeholder.svg"} alt="tg-icon" className="w-8 h-8" />
              </Link>
              <Link
                target="_blank"
                to="https://www.youtube.com/@asianuniversity_edu"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={YouTubeIcon || "/placeholder.svg"} alt="youtube-icon" className="w-8 h-8" />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/asianuniversity_edu?igsh=a3JrZnY3ZHV4ZWgz&utm_source=qr"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={InstaIcon || "/placeholder.svg"} alt="insta-icon" className="w-8 h-8" />
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/company/asian-technology-university"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={LinkedInIcon || "/placeholder.svg"} alt="in-icon" className="w-8 h-8" />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-bold mb-2 text-lg">Bog'lanish</h4>
            <p>Osiyo Texnologiyalar Universiteti</p>
            <p>Qarshi sh., Chaman MFY, Mustaqillik ko'chasi, 41-uy</p>
            <a href="tel:+998554041166" className="hover:text-blue-300 transition-colors duration-300">
              Telefon: +998554041166
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Osiyo Texnologiyalar Universiteti . Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  )
}

export default Footer
