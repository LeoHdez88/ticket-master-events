import styles from './ErrorPage.module.css'

const ErrorPage = () => {


     return (
     <div className={styles.container}>
        <h3 className={styles.title}>Oops!</h3>
        <p className={styles.description}>Pagina Errada</p>
    </div>
     
     );
};



export default ErrorPage;