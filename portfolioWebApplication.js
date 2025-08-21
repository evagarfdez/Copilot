import React from "react";

const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#222",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    navLinks: {
        display: "flex",
        gap: "1.5rem",
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    section: {
        padding: "3rem 1rem",
        maxWidth: "900px",
        margin: "0 auto",
    },
    gallery: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "1.5rem",
    },
    card: {
        background: "#f5f5f5",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
        margin: "0 auto",
    },
    input: {
        padding: "0.75rem",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
    },
    button: {
        padding: "0.75rem",
        borderRadius: "4px",
        border: "none",
        background: "#222",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
    },
};

function Navbar() {
    return (
        <nav style={styles.nav}>
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>My Portfolio</div>
            <ul style={styles.navLinks}>
                <li>
                    <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#projects" style={{ color: "#fff", textDecoration: "none" }}>
                        Project Gallery
                    </a>
                </li>
                <li>
                    <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>
                        Contact Form
                    </a>
                </li>
            </ul>
        </nav>
    );
}

function AboutMe() {
    return (
        <section id="about" style={styles.section}>
            <h2>About Me</h2>
            <p>
                Hello! I'm a passionate developer with experience in building responsive web applications. I love creating user-friendly interfaces and solving challenging problems.
            </p>
        </section>
    );
}

function ProjectGallery() {
    // Example projects
    const projects = [
        { title: "Project One", description: "A cool web app.", link: "#" },
        { title: "Project Two", description: "Another awesome project.", link: "#" },
        { title: "Project Three", description: "Yet another project.", link: "#" },
    ];
    return (
        <section id="projects" style={styles.section}>
            <h2>Project Gallery</h2>
            <div style={styles.gallery}>
                {projects.map((proj, idx) => (
                    <div key={idx} style={styles.card}>
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ContactForm() {
    return (
        <section id="contact" style={styles.section}>
            <h2>Contact Form</h2>
            <form style={styles.form}>
                <input style={styles.input} type="text" placeholder="Your Name" required />
                <input style={styles.input} type="email" placeholder="Your Email" required />
                <textarea style={styles.input} placeholder="Your Message" rows={5} required />
                <button style={styles.button} type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default function PortfolioWebApplication() {
    return (
        <div>
            <Navbar />
            <AboutMe />
            <ProjectGallery />
            <ContactForm />
        </div>
    );
}</section>