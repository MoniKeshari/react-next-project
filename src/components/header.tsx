// "use client";  // this is a client component
import { useAppSelector } from '@/ReduxToolkit/hooks';
import styles from '../components/header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import CartDetail from '../pages/cartdetails';
import EmptyCart from '@/pages/emptycart';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Box, SwipeableDrawer, Button, List, ListItem
} from '@mui/material';
import MobileResponsiveView from './headerMobile';
type Anchor = 'right';
const Header = () => {
    const [show, setShow] = useState(false);
    const [empty, setEmpty] = useState(false);
    const [cartPresent, setCartPresent] = useState(false);
    const item = useAppSelector(state => state.counter.items)
    
    const itemCount = useAppSelector(state => state.counter.items.reduce((acc, item) => acc + item.quantity, 0))

    const handleClick = () => {

        if (itemCount === 0) {
            setEmpty(true);

        }
        else {
            setEmpty(false);

        }
        if (itemCount !== 0) {
            setShow(true);
            setCartPresent(true);
        }
        else {
            setShow(false);
            setCartPresent(false);
        }


    }
    useEffect(() => {
        handleClick();
    })

    const [state, setState] = React.useState({
        right: false,
    });
   
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setState({ ...state, [anchor]: open });

            };


    const list = (anchor: Anchor) => (

        <Box
            sx={{ width: 800 }}
            role="presentation"
            onClick={cartPresent ? () => { } : toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
            
               
                <ListItem disablePadding>
                    {show && (<div className={styles.showdata}><CartDetail item={item} /></div>)}
                </ListItem>

                {empty && (<> <EmptyCart toggleDrawer={toggleDrawer} /></>)}
            </List>

        </Box>
    );
 
    return (
        <>
            <header className={styles.header}>
                <nav className={`${styles.wrapper} navbar navbar-expand-lg navbar-light bg-dark`}>
                    <h3>Shopping View</h3>
                    <div className={styles.content}>
                        <li className={styles.mobiledata}>
                            <MobileResponsiveView />
                        </li>
                    </div>


                    <div className={`${styles.content} collapse navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li> <Link className="nav-item active" href="/">
                                Home
                            </Link></li>
                            <li><Link className="nav-item" href="/about">
                                About

                            </Link></li>
                            <li> <Link className="nav-item" href="/contact">
                                Contact
                            </Link></li>
                            <li>
                                <div className={styles.cart}>
                                        {(['right'] as const).map((anchor) => (
                                            <React.Fragment key={anchor}>
                                                <div className={styles.counter}>
                                                    <span>{itemCount || 0} </span> </div>
                                                <Button onClick={toggleDrawer(anchor, true)}>{

                                                    <FaShoppingCart className={styles.icon} onClick={handleClick} />
                                                }</Button>
                                                <SwipeableDrawer
                                                    anchor={anchor}
                                                    open={state[anchor]}
                                                    onClose={toggleDrawer(anchor, true)}
                                                    onOpen={toggleDrawer(anchor, true)}
                                                >
                                                   
                                                  <ArrowBackIcon onClick={toggleDrawer(anchor, false)}/>
                                                    {list(anchor)}
                                                </SwipeableDrawer>
                                            </React.Fragment>
                                        ))}

                                    
                                </div>
                            </li>

                        </ul>

                    </div>

                </nav>
            </header>
        </>
    )
}
export default Header;