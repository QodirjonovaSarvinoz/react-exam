import React, { useContext } from "react";
import { FaMapMarkerAlt, FaUser, FaShoppingCart, FaClock, FaPizzaSlice } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { LangContext } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";

const translations = {
  uz: {
    city: "Moskva",
    avgDelivery: "O‘rtacha yetkazib berish: 00:24",
    workTime: "Ish vaqti: 11:00–23:00",
    checkAddress: "Manzilni tekshirish",
    login: "Kiring",
    logo: "Kuda Pizza"
  },
  ru: {
    city: "Москва",
    avgDelivery: "Среднее время доставки: 00:24",
    workTime: "Время работы: 11:00–23:00",
    checkAddress: "Проверить адрес",
    login: "Войти",
    logo: "Kuda Pizza"
  },
  en: {
    city: "Moscow",
    avgDelivery: "Avg delivery: 00:24",
    workTime: "Working hours: 11:00–23:00",
    checkAddress: "Check address",
    login: "Login",
    logo: "Kuda Pizza"
  }
};

const LangButton = ({ langCode, currentLang, setLang }) => (
  <button
    onClick={() => setLang(langCode)}
    className={`px-2 py-1 text-xs sm:text-sm font-medium rounded ${
      currentLang === langCode ? "bg-blue-500 text-white" : "bg-orange-500 text-white"
    }`}
  >
    {langCode.toUpperCase()}
  </button>
);

const InfoItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-1 text-xs sm:text-sm">
    <Icon className="text-gray-700" />
    <span>{text}</span>
  </div>
);

const CartButton = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const uniqueCount = cartItems.length;

  return (
    <button
      onClick={() => navigate("/cart")} 
      className="relative flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded text-xs sm:text-sm"
    >
      <FaShoppingCart />
      {uniqueCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {uniqueCount}
        </span>
      )}
    </button>
  );
};

const Header = () => {
  const { lang, setLang } = useContext(LangContext);
  const t = translations[lang];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="hidden sm:flex items-center justify-between h-10 text-gray-700 text-xs sm:text-sm border-b border-gray-300 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <InfoItem icon={FaMapMarkerAlt} text={t.city} />
        <div className="flex items-center gap-2">
          <InfoItem icon={FaClock} text={t.avgDelivery} />
          <span className="hidden sm:inline">{t.workTime}</span>
          <span className="hidden sm:inline">{t.checkAddress}</span>
          <InfoItem icon={FaUser} text={t.login} />
        </div>
      </div>

      <div className="flex items-center justify-between h-14 border-b border-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <FaPizzaSlice className="text-red-500 text-2xl" />
          <span className="font-semibold text-lg">{t.logo}</span>
        </Link>

        <div className="flex items-center gap-2">
          <CartButton /> 
          <div className="flex items-center gap-1">
            {["uz", "ru", "en"].map((l) => (
              <LangButton key={l} langCode={l} currentLang={lang} setLang={setLang} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

