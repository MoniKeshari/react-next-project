import Image from 'next/image';
import styles from './mininav.module.scss';
import { product } from '@/types/hometype';
import Link from 'next/link';
const MiniNavBar = ({ res }: { res: product }) => {
    return (
        <>
            <div className={styles.wrapper}>

                {res.slice(0, 9).map((id) => {
                    return (<>
                        <Link href={`/cardpost/${id.id}`} >
                            <div key={id.id}>
                                <Image src={`${id.image}`} alt='' height={100} width={100} />
                                <div className={styles.container}>  <p>{id.category}</p></div>
                            </div>

                        </Link>
                    </>)
                })}

            </div>



        </>
    )

}
export default MiniNavBar;