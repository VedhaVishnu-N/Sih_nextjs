'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styles from './Container.module.css';

const DateDropdown = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className={`dropdown ${styles.dropdownContent}`}>
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dateDropdownButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Select Dates
            </button>
            <div className="dropdown-menu p-4" aria-labelledby="dateDropdownButton">
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <DatePicker
                        id="startDate"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <DatePicker
                        id="endDate"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="form-control"
                    />
                </div>
            </div>
        </div>
    );
};

export default DateDropdown;
