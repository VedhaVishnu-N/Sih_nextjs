import styles from './Addprj.module.css'
import Link from 'next/link';
const Addprj =()=>{
    return(
        <>
            <div className={styles.container}>
                <button class="btn btn-primary"><Link href="/addproject" className={styles.link}>Add Project</Link></button>

            </div>
        </>
    )
}

export default Addprj;