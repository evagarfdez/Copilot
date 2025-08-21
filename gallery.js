/**
 * Gallery component displays a grid of project cards.
 * 
 * Projects are loaded from a local JSON file and rendered as individual cards.
 * Each card displays the project's name and description.
 * 
 * @component
 * @example
 * return (
 *   <Gallery />
 * )
 */
 
// Inline documentation for functions and variables:

/**
 * React state holding the list of projects to display.
 * @type {[Object[], Function]}
 */

/**
 * useEffect hook loads project data from the imported JSON file on mount.
 */

/**
 * Inline styles for the gallery grid layout.
 * @type {Object}
 */

/**
 * Inline styles for each project card.
 * @type {Object}
 */
import React, { useEffect, useState } from "react";
import projectsData from "./projects.json";

// Adjust the path if projects.json is elsewhere

const Gallery = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // If you fetch from server, use fetch(). Here we import directly.
        setProjects(projectsData);
    }, []);

    return (
        <div style={styles.grid}>
            {projects.map((project, idx) => (
                <div key={idx} style={styles.card}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </div>
    );
};

const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        padding: "1rem",
    },
    card: {
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: "8px",
        padding: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
};

export default Gallery;