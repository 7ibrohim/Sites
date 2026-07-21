import React from 'react'
import './Footer.css'
import logo from "../assets/logo.png"
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

function Footer() {
    const { t } = useTranslation();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bigfoot">

            <footer className="Footer">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src={logo} alt="logo" />
                        <p>{t('footer.tagline')}</p>
                    </div>

                    <div className="footer-links">
                        <h4>{t('footer.navigation')}</h4>
                        <span onClick={() => scrollTo('bosh-sahifa')}>{t('navbar.home')}</span>
                        <span onClick={() => scrollTo('kurslar')}>{t('navbar.courses')}</span>
                        <span onClick={() => scrollTo('natijalar')}>{t('navbar.results')}</span>
                        <span onClick={() => scrollTo('xizmatlar')}>{t('navbar.services')}</span>
                    </div>

                    <div className="footer-contact">
                        <h4>{t('footer.contact')}</h4>
                        <p>+998 95 061 64 66</p>
                        <p>info@DatasiteAcademy</p>
                        <p>{t('footer.address')}</p>
                    </div>

                    <div className="footer-social">
                        <h4>{t('footer.follow')}</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Datasite Academy {t('footer.rights')}</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer