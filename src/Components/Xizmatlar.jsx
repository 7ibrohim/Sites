import React from 'react'
import './Xizmatlar.css'
import { useTranslation } from 'react-i18next'
import { FaChalkboardTeacher, FaProjectDiagram, FaHeadset } from "react-icons/fa"

function Services() {
    const { t } = useTranslation();

    const services = [
        { icon: <FaChalkboardTeacher />, key: "mentorship" },
        { icon: <FaProjectDiagram />, key: "projects" },
        { icon: <FaHeadset />, key: "support" },
    ];

    return (
        <section className="Services" id="xizmatlar">
            <h2 className="serv-title">{t('services.title')}</h2>
            <p className="serv-subtitle">{t('services.subtitle')}</p>

            <div className="serv-cards">
                {services.map((service) => (
                    <div className="serv-card" key={service.key}>
                        <div className="serv-icon">{service.icon}</div>
                        <h3>{t(`services.${service.key}.name`)}</h3>
                        <p>{t(`services.${service.key}.desc`)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services