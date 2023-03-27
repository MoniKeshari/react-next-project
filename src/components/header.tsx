"use client";  // this is a client component
import styles from '../components/header.module.scss';
import Link from 'next/link'
const Header = () => {
    return (
        <>
            <nav className={`${styles.wrapper} navbar navbar-expand-lg navbar-light bg-dark`}>
                <a className="navbar-brand" href="#">Location Finder</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${styles.content} collapse navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">  About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">  Contact</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default Header;