import React from 'react';

const Contact = () => {
    const sectionStyle = {
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #0b4161 0%, #1a5a7a 50%, #0b4161 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
    };

    const containerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
    };

    const headingStyle = {
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: '800',
        marginBottom: '20px',
        lineHeight: '1.2',
    };

    const subtitleStyle = {
        fontSize: '1.2rem',
        marginBottom: '40px',
        opacity: 0.95,
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto 40px',
    };

    const contactInfoStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginBottom: '50px',
    };

    const infoCardStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px',
        padding: '30px 20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
    };

    const iconStyle = {
        fontSize: '2.5rem',
        marginBottom: '15px',
    };

    const infoTitleStyle = {
        fontSize: '1.2rem',
        fontWeight: '600',
        marginBottom: '8px',
    };

    const infoTextStyle = {
        fontSize: '1rem',
        opacity: 0.9,
    };

    const ctaButtonStyle = {
        display: 'inline-block',
        padding: '18px 45px',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#0b4161',
        background: 'white',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        textDecoration: 'none',
    };

    const decorativeCircleStyle = {
        position: 'absolute',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.05)',
        animation: 'float 6s ease-in-out infinite',
    };

    return (
        <section style={sectionStyle} id="contact">
            {/* Decorative elements */}
            <div style={{ ...decorativeCircleStyle, width: '300px', height: '300px', top: '-10%', right: '-5%' }} />
            <div style={{ ...decorativeCircleStyle, width: '250px', height: '250px', bottom: '-8%', left: '-5%', animationDelay: '3s' }} />

            <div style={containerStyle}>
                <h2 style={headingStyle}>Ready to Transform Your Space?</h2>
                <p style={subtitleStyle}>
                    Let's bring your vision to life. Get in touch with us today for a free consultation
                    and start your journey towards your dream interior.
                </p>

                <div style={contactInfoStyle}>
                    <div style={infoCardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={iconStyle}>📞</div>
                        <h3 style={infoTitleStyle}>Call Us</h3>
                        <p style={infoTextStyle}>+91 XXX XXX XXXX</p>
                    </div>

                    <div style={infoCardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={iconStyle}>✉️</div>
                        <h3 style={infoTitleStyle}>Email Us</h3>
                        <p style={infoTextStyle}>info@hi-stylee.com</p>
                    </div>

                    <div style={infoCardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={iconStyle}>📍</div>
                        <h3 style={infoTitleStyle}>Visit Us</h3>
                        <p style={infoTextStyle}>Your City, India</p>
                    </div>
                </div>

                <a href="tel:+91XXXXXXXXXX" style={ctaButtonStyle}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                    }}
                >
                    Schedule a Free Consultation
                </a>
            </div>
        </section>
    );
};

export default Contact;
