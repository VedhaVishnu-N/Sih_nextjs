"use client";
import styles from './Result.module.css';
import Projectcomponent from './Projectcomponent';
import { useState,useEffect } from 'react';
const Result =()=>{
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Retrieve projects from local storage
        const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(savedProjects);
    }, []);

    return(
        <>
            <div className={styles.container}>
            {projects.map((project, index) => (
                <Projectcomponent
                    key={index}
                    text={project.title}
                    description={project.description}
                    status={project.status}
                />
            ))}
            </div>
        </>
    )
}
export default Result;