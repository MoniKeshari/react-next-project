import React from 'react'
import styles from './search.module.scss'
const Search = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contentdata}>
                    <h1>
                        Find your perfect place.
                    </h1>

                    <p>Discover & connect with great places around the world.</p>

                </div>

                <div className={styles.inputfield}>
                    <input placeholder='search location with google search api' />
                    <button>Search</button>
                </div>
               
            </div>
          

        </>


    )
}
export default Search;