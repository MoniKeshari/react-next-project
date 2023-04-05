import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from './404.module.scss';
import Image from "next/image";
const ErrorPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgdata}>
                    <Image src='/homeimg/error.jpg' width={500} height={300} alt='' />
                </div>
                <div className={styles.paragraph}>
                    <h2> This Page is not Available.</h2>
                    <p>Error Code: 404</p>
                   

                </div>

                <Link href='/'>
                        <Button>
                            Go To Back
                        </Button>
                    </Link>


            </div>
        </>
    )
}
export default ErrorPage;