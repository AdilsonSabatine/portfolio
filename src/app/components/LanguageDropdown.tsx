"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const languages = [
    { code: "en", label: "English", flag: "images/flags/en.png" },
    { code: "pt", label: "Português", flag: "images/flags/pt-br.png" },
];

export default function LanguageDropdown() {
    const { locale, setLocale } = useLanguage();
    const [open, setOpen] = useState(false);

    const handleSelect = (code: "en" | "pt") => {
        setLocale(code);
        setOpen(false);
    };

    const current = languages.find((l) => l.code === locale);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center mt-1 bg-white border rounded shadow-lg z-50 min-w-max"
            >
                <img src={current?.flag} alt={current?.label} className="w-5 h-5 mr-2" />
            </button>
            {open && (
                <ul className="absolute mt-1 bg-white border rounded shadow-lg z-50 min-w-max">
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            onClick={() => handleSelect(lang.code as "en" | "pt")}
                            className="p-1 hover:bg-gray-100 cursor-pointer flex justify-center"
                        >
                            <img src={lang.flag} alt={lang.label} className="w-5 h-5" />
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}
