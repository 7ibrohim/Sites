import React from 'react'
import './Page.css'
import { useTranslation } from 'react-i18next'

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="Hero" id="bosh-sahifa">
            <div className="hero-left">
                <h1 className="hero-title">{t('hero.title')}</h1>
                <p className="hero-text">{t('hero.text')}</p>
                <div className="hero-actions">
                    <button
                        className="btn-primary"
                        onClick={() => document.getElementById('aloqa').scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t('hero.btnPrimary')}
                    </button>
                    <button
                        className="btn-secondary"
                        onClick={() => document.getElementById('kurslar').scrollIntoView({ behavior: 'smooth' })}
                    >
                        {t('hero.btnSecondary')}
                    </button>
                </div>
            </div>

            
        </section>
    )
}

export default Hero