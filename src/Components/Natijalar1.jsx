import React from 'react'
import './Natijalar.css'
import { useTranslation } from 'react-i18next'
import { FaUserGraduate, FaBriefcase, FaStar } from "react-icons/fa"

function Results() {
    const { t } = useTranslation();

    const stats = [
        { icon: <FaUserGraduate />, value: "500+", key: "graduates" },
        { icon: <FaBriefcase />, value: "95%", key: "employed" },
        { icon: <FaStar />, value: "4.9", key: "rating" },
    ];

    return (
        <section className="Results" id="natijalar">
            <h2 className="res-title">{t('results.title')}</h2>
            <p className="res-subtitle">{t('results.subtitle')}</p>

            <div className="res-cards">
                {stats.map((stat) => (
                    <div className="res-card" key={stat.key}>
                        <div className="res-icon">{stat.icon}</div>
                        <h3>{stat.value}</h3>
                        <p>{t(`results.${stat.key}`)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Results