import { useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.css'

const ErrorPage = () => {

     const error = useRouteError();
     console.error(error);

     return (
     <div className={styles.container}>
        <h3 className={styles.title}>{error.status} Oops!</h3>
        <p className={styles.description}>{error.data}</p>
    </div>
     
     );
};



export default ErrorPage;