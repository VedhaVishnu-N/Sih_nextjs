import styles from './Result.module.css'
const Projectcomponent =({text,description,status})=>{
    return(
        <>
        
            <div className={styles.contain}>
                <div className={styles.textdiv}>
                    <h1>{text}</h1>
                    <p>{description}</p>
                    <p>{status}</p>
                </div>
                <button className={styles.btn1}>view</button>
             </div>
        </>
    )
}
export default Projectcomponent;