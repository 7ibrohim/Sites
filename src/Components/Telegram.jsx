import React, { useState } from 'react'
import './Telegram.css'
import { useTranslation } from 'react-i18next'
import { FaTelegramPlane, FaUser, FaPhone } from "react-icons/fa"

const BOT_TOKEN = "7756877660:AAHmiPGWkUnxgmxkww4Q7Q9jh0kNoH-RC_A";
const CHAT_ID = "7270069485";

function Contact() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [course, setCourse] = useState('Frontend');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const text = `🎓 Yangi yozilish!\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n💻 Yo'nalish: ${course}`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: CHAT_ID, text }),
            });

            if (res.ok) {
                setStatus('success');
                setName('');
                setPhone('');
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <section className="Contact" id="aloqa">
            <div className="contact-box">
                <div className="contact-glow"></div>

                <div className="contact-info">
                    <div className="contact-badge">
                        <FaTelegramPlane />
                        <span>{t('contact.badge')}</span>
                    </div>
                    <h2>{t('contact.title')}</h2>
                    <p>{t('contact.subtitle')}</p>
                </div>

                <div className="contact-card">
                    {status === 'success' ? (
                        <div className="contact-success">
                            <div className="success-icon">✓</div>
                            <p>{t('enroll.success')}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-group">
                                <FaUser className="input-icon" />
                                <input
                                    type="text"
                                    placeholder={t('enroll.name')}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <FaPhone className="input-icon" />
                                <input
                                    type="tel"
                                    placeholder="+998 90 123 45 67"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>

                            <select value={course} onChange={(e) => setCourse(e.target.value)}>
                                <option value="Frontend">Frontend</option>
                                <option value="Backend">Backend</option>
                                <option value="Mobile">Mobile</option>
                            </select>

                            <button type="submit" disabled={status === 'sending'}>
                                {status === 'sending' ? t('enroll.sending') : t('enroll.submit')}
                            </button>

                            {status === 'error' && (
                                <p className="contact-error">{t('enroll.error')}</p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Contact