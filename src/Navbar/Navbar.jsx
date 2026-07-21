import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from "../assets/assets/logo.png"
import { useTranslation } from 'react-i18next'
import { MdLanguage } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GoSun } from "react-icons/go";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const { t, i18n } = useTranslation();
    const [darkMode, setDarkMode] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // link bosilganda menyu yopilsin
    };

    return (
        <div className='Big'>
            <div className="Navbar">
                <ul>
                    <li><img src={logo} alt="" /></li>
                </ul>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li onClick={() => scrollTo('bosh-sahifa')}>
                        {t('navbar.home')}
                    </li>
                    <li onClick={() => scrollTo('kurslar')}>
                        {t('navbar.courses')}
                    </li>
                    <li onClick={() => scrollTo('natijalar')}>
                        {t('navbar.results')}
                    </li>
                    <li onClick={() => scrollTo('xizmatlar')}>
                        {t('navbar.services')}
                    </li>
                </ul>

                <ul>
                    <li className="lang-switcher">
                        <MdLanguage onClick={() => setLangOpen(!langOpen)} />
                        {langOpen && (
                            <div className="lang-dropdown">
                                <span onClick={() => changeLanguage('uz')}>UZ</span>
                                <span onClick={() => changeLanguage('ru')}>RU</span>
                                <span onClick={() => changeLanguage('en')}>EN</span>
                            </div>
                        )}
                    </li>
                    <li onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <GoSun /> : <CiDark />}
                    </li>
                    <li className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar