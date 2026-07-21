import React from 'react'
import './Pagetwo.css'
import { useTranslation } from 'react-i18next'
import { FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa"

function Directions() {
    const { t } = useTranslation();

    const courses = [
        { icon: <FaLaptopCode />, key: "frontend" },
        { icon: <FaServer />, key: "backend" },
        { icon: <FaMobileAlt />, key: "mobile" },
    ];

    return (
       <section className="Directions" id="kurslar">
            <h2 className="dir-title">{t('directions.title')}</h2>
            <p className="dir-subtitle">{t('directions.subtitle')}</p>

            <div className="dir-cards">
                {courses.map((course) => (
                    <div className="dir-card" key={course.key}>
                        <div className="dir-icon">{course.icon}</div>
                        <h3>{t(`directions.${course.key}.name`)}</h3>
                        <p>{t(`directions.${course.key}.desc`)}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Directions