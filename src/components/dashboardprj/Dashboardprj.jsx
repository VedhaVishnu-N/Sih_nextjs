import Ongoing from "./Ongoing";
import Pending from "./Pending";
import Completed from "./Completed";
import styles from "./Dashboard.module.css"



const Dashboardprj =()=>{
    return(
        <div className={styles.dashprj}>
        <Ongoing />
        <Pending />
        <Completed />
        
        </div >
    )
}

export default Dashboardprj;