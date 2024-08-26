import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Container.module.css';
import Dropdown from './Dropdown';
import DateDropdown from './DateDropdown';
const Container = () => {
    return (
        <>
        <div className={styles.content}>
            <div className={styles.searchcontainer}>
            <input
                type="search"
                name="search"
                placeholder="Search"
                className={styles.searchInput}
            />
            </div>
            <div className={styles.dropdownContainer}>
                <DateDropdown />
                <Dropdown />
            </div>

            
        </div>

        </>
    );
};

export default Container;
