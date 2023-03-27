import React, { useEffect, useRef, useState } from "react";
import { useGoogleMap} from '@ubilabs/google-maps-react-hooks';
import styles from  '../geolocation/locationfinder.module.scss'
const LocationFinder = () => {
    const map = useGoogleMap();
    const markerRef = useRef<google.maps.Marker | null>(null);
    const [lat, setlat] = useState(43.68);
    const [lan, setlan] = useState(-79.43);
    useEffect(() => {
        if (!map || markerRef.current) return;
        markerRef.current = new google.maps.Marker({ map })

    }, [map])
    useEffect(() => {
        if (!markerRef.current) return;
        if (isNaN(lat) || isNaN(lan)) return;
        markerRef.current.setPosition(new google.maps.LatLng(lat, lan));
    }, [lat, lan, map])

    return (
        <div className={styles.wrapper}>
            <input type="number" value={lat} onChange={(event: any) => setlat(parseFloat(event.target.value))} step={0.01} />
            <input type="number" value={lan} onChange={(event: any) => setlan(parseFloat(event.target.value))} step={0.01}/>
        </div>
    )
}
export default LocationFinder