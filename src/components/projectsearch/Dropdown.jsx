'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Container.module.css';

const Dropdown = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensures this runs on the client side
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    if (!isClient) {
        return null; // Optionally return a loading state if desired
    }

    return (
        <div className={`dropdown ${styles.dropdownContent}`}>
            <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="statusDropdownButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Status
            </button>
            <div className="dropdown-menu" aria-labelledby="statusDropdownButton">
                <a className="dropdown-item" href="#">Ongoing</a>
                <a className="dropdown-item" href="#">Pending</a>
                <a className="dropdown-item" href="#">Completed</a>
            </div>
        </div>
    );
};

export default Dropdown;
