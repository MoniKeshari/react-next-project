"use client";  // this is a client component
import { useState } from 'react';
import styles from './header.module.scss'
import Search from '../search/search';
import { isMobile } from 'react-device-detect';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handletoggle = () => {
        setToggle(!toggle);

    }


    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        <h1>Listed</h1>
                    </div>
                    <div className={styles.fabars}>
                        <i className="bars-icon" onClick={handletoggle}>&#9776;</i>

                    </div>



                    <div className={styles.services}>
                        <div className={styles.servicing}>
                            <span> <h3>Home</h3></span>
                        </div>
                        <div className={styles.servicing}>
                            <div className={styles.dropDown}>
                                <select className={styles.selectoption}>
                                    <option value="volvo">Destination</option>
                                    <option value="saab">Hotels</option>
                                    <option value="opel">Restaurants</option>
                                    <option value="audi">Places</option>
                                </select>
                            </div>


                        </div>
                        <div className={styles.servicing}>
                            <span> <h3>Blog</h3></span>
                        </div>

                        <div className={styles.servicing}>
                            <span> <h3>About</h3></span>
                        </div>
                        <div className={styles.servicing}>
                            <span> <h3>Contact</h3></span>
                        </div>


                    </div>



                </div>
                <div>
                    <Search />
                </div>


            </div>
        </>
    )
}
export default Header;