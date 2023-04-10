import React from 'react'
import styles from '../components/footer.module.scss'
import {footerItem} from '@/types/hometype'

export default function footer({ id}: {id:footerItem}) {
    return (

        <>
            <div className={styles.footer}>
                <div className="first-col">
                    <ul>
                        <li >
                            {id.img}

                        </li>

                    </ul>
                </div>
                <div className="second-col">
                    <ul>
                        <li>   <p>{id.name}</p></li>

                    </ul>
                </div>
                <div className="third-col">
                    <ul>

                        <li><p>{id.section}</p></li>

                    </ul>

                </div>

            </div></>

    )

}
