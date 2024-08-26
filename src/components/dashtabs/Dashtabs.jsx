import DashProject from './DashProject';
import DashTraining from './DashTraining';
import Dashnotification from './DashNotification';
import Dashtasks from './Dashtasks';
import styles from './Dashtabs.module.css';

const Dashtabs = () => {
    return (
        <div className={styles.container}>
            <DashProject />
            <DashTraining />
            <Dashnotification />
            <Dashtasks />
        </div>
    );
}

export default Dashtabs;
