"use client";
import styles from './Addproject.module.css';
import Link from 'next/link';
import { useState } from 'react';
const Addprojectcomp =()=>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = () => {
        const newProject = { title, description, status };

        const existingProjects = JSON.parse(localStorage.getItem('projects')) || [];
        existingProjects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(existingProjects));

        setTitle('');
        setDescription('');
        setStatus('');
    };
    return(
        <>
            <div className={styles.btncontainer}>
                <button class="btn btn-primary"><i className={styles.arrow}></i>
                <Link href="/projectshome" className={styles.link}>Back to Projects</Link>
                </button>
            </div>
            <div className={styles.inputcontainer}>
                <div className={styles.detailcontainer}>
                <p>Enter the Title:</p>
                <input type='text' value={title} className={styles.title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'></input>
                </div>
                <div>
                <p>Enter status</p>
                <input type="text" name="Status" value={status}className={styles.status}onChange={(e) => setStatus(e.target.value)} placeholder='Status'/>
                </div>
                <div className={styles.detailcontainer}>
                <p>Enter the Title:</p>
                <textarea type='text' className={styles.description} value={description}onChange={(e) => setDescription(e.target.value)} placeholder='Desciption'></textarea>
                </div>  
                <div className={styles.submit}>
                <button className={`btn btn-primary`} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )

}
export default Addprojectcomp;