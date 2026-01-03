
import React, { useContext } from "react";
import {
  FaPizzaSlice,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { LangContext } from "../context/LanguageContext";

const translations = {
  uz: {
    company: "Kuda Pizza",
    sections: {
      about: "Kompaniya haqida",
      terms: "Foydalanish shartlari",
      guarantee: "Kafolat shartlari",
      restaurant: "Restaran",
      contacts: "Kontaktlar",
      support: "qo‘llab-quvvatlash",
      trackOrder: "Buyurtmangizni kuzatib boring",
      phone1: "+7 (926) 223-10-11",
      phone2: "+7 (926) 223-10-11",
    },
    copyright: "© Copyright 2021 — Kuda Pizza",
  },
  ru: {
    company: "Kuda Pizza",
    sections: {
      about: "О компании",
      terms: "Условия использования",
      guarantee: "Гарантийные условия",
      restaurant: "Ресторан",
      contacts: "Контакты",
      support: "Поддержка",
      trackOrder: "Отслеживание заказа",
      phone1: "+7 (926) 223-10-11",
      phone2: "+7 (926) 223-10-11",
    },
    copyright: "© Copyright 2021 — Kuda Pizza",
  },
  en: {
    company: "Kuda Pizza",
    sections: {
      about: "About company",
      terms: "Terms of use",
      guarantee: "Guarantee terms",
      restaurant: "Restaurant",
      contacts: "Contacts",
      support: "Support",
      trackOrder: "Track your order",
      phone1: "+7 (926) 223-10-11",
      phone2: "+7 (926) 223-10-11",
    },
    copyright: "© Copyright 2021 — Kuda Pizza",
  }
};

const FooterSection = ({ title, items }) => (
  <div>
    <h3 className="font-semibold mb-3">{title}</h3>
    <ul className="space-y-2 text-gray-600 text-sm">
      {items.map((item, idx) => (
        <li key={idx} className="hover:text-black cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ContactItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 text-gray-600 text-sm">
    <Icon className="text-orange-500 text-sm" />
    <span>{text}</span>
  </div>
);

const SocialIcon = ({ icon: Icon }) => (
  <span className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 cursor-pointer">
    <Icon />
  </span>
);

const Footer = () => {
  const { lang } = useContext(LangContext);
  const t = translations[lang];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-10 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
        
        <div className="flex items-center gap-3">
          <FaPizzaSlice className="text-red-500 text-2xl" />
          <span className="font-semibold text-lg">{t.company}</span>
        </div>

        <FooterSection
          title={t.company}
          items={[t.sections.about, t.sections.terms, t.sections.guarantee]}
        />

        <FooterSection
          title={t.sections.support}
          items={[t.sections.restaurant, t.sections.contacts, t.sections.support, t.sections.trackOrder]}
        />

        <div>
          <h3 className="font-semibold mb-3">{t.sections.contacts}</h3>
          <div className="space-y-2">
            <ContactItem icon={FaPhoneAlt} text={t.sections.phone1} />
            <ContactItem icon={FaPhoneAlt} text={t.sections.phone2} />
          </div>
          <div className="flex gap-4 mt-4">
            <SocialIcon icon={FaFacebookF} />
            <SocialIcon icon={FaInstagram} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
