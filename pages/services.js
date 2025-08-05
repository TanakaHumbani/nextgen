"use client";
import 'normalize-css';
import styles from '../styles/services.module.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Services() {
    return (
        <div className={styles.servicesWrapper}>
         <style jsx global>{`
              body {
                margin: 0px;
                padding: 0px;
              }
            `}</style>
        <NavBar/>
        <h1>Our Services</h1>
        <p className={styles.firstPara}>Explore the wide range of services we offer to meet your construction needs.</p>
        <div className={styles.servicesInnerWrapper}>
            <div className={styles.constructionServices}>
                <h2>Construction Services</h2>
                <div className={styles.cardGrid}>
                {[
                    "Building",
                    "Renovation",
                    "Site Preparation",
                    "Project Management",
                    "Dam Construction",
                    "Road Construction",
                    "Road markings"
                ].map(service => (
                    <div key={service} className={styles.serviceCard}>
                    <span className={styles.serviceName}>{service}</span>
                    <a
                        href={getWhatsAppLink(service)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.whatsappButton}
                        aria-label={`WhatsApp about ${service}`}
                    >
                        <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" style={{ verticalAlign: "middle" }}>
                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.53 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.61-.26-3.81-.76l-.27-.11-4.27 1.38 1.4-4.14-.18-.28C7.26 18.61 7 17.32 7 16c0-5.06 4.13-9.18 9.18-9.18S25.36 10.94 25.36 16 21.23 25.18 16 25.18zm5.03-6.47c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/>
                        </svg>
                        WhatsApp
                    </a>
                    </div>
                ))}
            </div>

        </div>
        <div className={styles.maintenanceServices}>
          <h2>Maintenance Services</h2>
          <div className={styles.cardGrid}>
            {[
              "Electrical Maintenance",
              "Plumbing Services",
              "HVAC Services",
              "Roofing Repairs",
              "Landscaping",
              "Cleaning Services"
            ].map(service => (
              <div key={service} className={styles.serviceCard}>
                <span className={styles.serviceName}>{service}</span>
                <a
                  href={getWhatsAppLink(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                  aria-label={`WhatsApp about ${service}`}
                >
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" style={{ verticalAlign: "middle" }}>
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.53 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.61-.26-3.81-.76l-.27-.11-4.27 1.38 1.4-4.14-.18-.28C7.26 18.61 7 17.32 7 16c0-5.06 4.13-9.18 9.18-9.18S25.36 10.94 25.36 16 21.23 25.18 16 25.18zm5.03-6.47c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.otherServices}>
          <h2>Other Services</h2>
          <div className={styles.cardGrid}>
            {[
              "Consultation",
              "Design and Planning",
              "Supply of Construction Materials",
              "Equipment Rental",
              "Safety Training",
              "Environmental Services"
            ].map(service => (
              <div key={service} className={styles.serviceCard}>
                <span className={styles.serviceName}>{service}</span>
                <a
                  href={getWhatsAppLink(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappButton}
                  aria-label={`WhatsApp about ${service}`}
                >
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" style={{ verticalAlign: "middle" }}>
                    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.53 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.61-.26-3.81-.76l-.27-.11-4.27 1.38 1.4-4.14-.18-.28C7.26 18.61 7 17.32 7 16c0-5.06 4.13-9.18 9.18-9.18S25.36 10.94 25.36 16 21.23 25.18 16 25.18zm5.03-6.47c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>'
        
        </div>
        <Footer />
        </div>
    );
}

function getWhatsAppLink(service) {
  const phone = "yourphonenumber"; // Replace with your WhatsApp number, e.g., 263771234567
  const message = `I'm interested in your ${service} service.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}