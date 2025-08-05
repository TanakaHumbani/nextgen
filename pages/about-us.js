"use client";
// import 'normalize-css';
import styles from '../styles/about-us.module.css';
import NavBar from '../components/navbar';
import Footer from '../components/footer';  

export default function AboutUs() {
    return (
        <>
            <div className={styles.aboutUsWrapper}>
                <NavBar />

            <div className={styles.aboutUsTitle}>
                <h1>About Us</h1>
                <p>NextGen is a Modern Zimbabwean Organisation which provides contemporary solutions in the fields of Air conditioning, electrical engineering, plumbing, computers and accessories and general stationery.
                It is very alive and responsive to customer needs in the above areas and we are constantly adapting to new technologies to provide our customers the best solutions that suits their day to day needs.</p> 
                <h2>Background</h2>   
                <p>NextGen Construction Solutions is located at shop 173 longcheng Plaza corner mutley bend and Samora Machel ave Belvedere, Harare, Zimbabwe.
                    the Company is client oriented and offers good quality services timely, effciently and effectively.</p>
            </div>    
            <div className={styles.aboutUsSection}>
                <section className={styles.visionSection}>
                    <h2>Our Vision</h2>
                    <p>To be the most trusted partner in the construction industry, known for our commitment to quality, sustainability, and customer satisfaction.</p>
                </section>
            
                <section className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <p>To provide top-notch construction materials and services that empower our clients to build their dreams with confidence.</p>
                </section>

                <section className={styles.valuesSection}>
                    <h2>Our Values</h2>
                    <ul>
                        <li>Integrity</li>
                        <li>Quality</li>
                        <li>Innovation.</li>
                        <li>Sustainability</li>
                        <li>Customer Focus.</li>
                    </ul>
                </section>
            </div>
            <div className={styles.aboutUsLocation}>
                <h1>Our Location</h1>
                <p>We are located in the heart of Harare, Zimbabwe, making it easy for our clients to access our services and products.</p>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps?q=-17.82598399911561,31.003345427657766&z=17&output=embed"
                        width="600"
                        height="450"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="NextGen Construction Solutions Location"
                    ></iframe>
                </div>
            </div>
            <div className={styles.teamSection}>
                <h2>Meet Our Team</h2>
                <p>Our team is composed of experienced professionals dedicated to delivering the best construction solutions.</p>
                <div className={styles.teamMembers}>
                    <div className={styles.teamMember}>
                        <img src="/images/team/ceo.jpg" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className={styles.teamMember}>
                        <img src="/images/team/manager.jpg" alt="Team Member 3" />
                        <h3>Mike Johnson</h3>
                        <p>Head of Sales</p>
                    </div>
                    <div className={styles.teamMember}>
                        <img src="/images/team/female.jpg" alt="Team Member 4" />
                        <h3>Emily Davis</h3>
                        <p>Marketing Manager</p>
                    </div>
                </div>
            </div>
        
            <Footer />
            </div>
            
        </>
    );
}