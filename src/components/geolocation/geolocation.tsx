import React from 'react'
import GoogleMapReact from "google-map-react";
import LocationFinder from './location';

import styles from  '../geolocation/geolocation.module.scss';
const LocationArea = () => {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
            <LocationFinder />
            </div>
           
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBzTyobuf08SaBhW612uvInSKgx2l9ZwZE" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}

            />
        </div>
    )
}


export default LocationArea;