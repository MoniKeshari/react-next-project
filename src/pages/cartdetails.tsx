
import { useAppDispatch } from '@/ReduxToolkit/hooks';
import styles from '../pages/cartdetail.module.scss';
import { decrementQuantity, incrementQuantity, removeItem } from '@/ReduxToolkit/createSlice';
import Image from 'next/image';
import Link from 'next/link';
import { product, ProductItemData } from '@/types/hometype';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
const CartDetail = ({ item }: { item: product }) => {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleClose = () => {
        setOpen(false);

    };

    const handleRemoveCard = (id: any) => {
        setSelectedData(id)
        setOpen(true);
    };


    return (
        <>
            {
                open && (
                    <>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Remove Item
                            </BootstrapDialogTitle>
                            <DialogContent dividers>

                                <Typography gutterBottom>
                                    Are you sure you want to remove this item?
                                </Typography>
                                <Typography gutterBottom>
                                    Product Id: {selectedData}
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={() => {
                                    dispatch(removeItem(selectedData))
                                    setOpen(false)
                                }}>
                                    Yes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                    </>
                )
            }
            {item?.map((id: ProductItemData) => {
                const originalPrice = id.price;
                let discountPercentage = 2;
                if (originalPrice >= 40) {
                    discountPercentage = 4;
                }
                const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

                return (
                    <>
                        <div className={styles.container} key={id.id}>
                            <div className={`${styles.wrapper} row `}>
                                <div className={styles.imgpic}>
                                    <Link href={`/cardpost/${id.id}`} >
                                        <Image
                                            src={id.image}
                                            alt="Description of the image"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>


                                <div className='row justify-content-center'>
                                    <div className={styles.containerData} >
                                        <ul>
                                            <li>
                                                <h6>{id.category}</h6>
                                            </li>
                                            <li>
                                                <p className="card-text">
                                                    <span className={styles.originalPrice}> &#8377;{(originalPrice.toFixed(2).toLocaleString())}</span>
                                                    <span className={styles.discountprice}>&#8377;{discountedPrice.toFixed(2).toLocaleString()} </span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.datacontent}>
                                    <div className={styles.paddingdata}>
                                        <button className={styles.dec} onClick={() => dispatch(decrementQuantity(id.id))
                                        }><span>-</span></button>

                                    </div>
                                    <div className={styles.paddingdata}>

                                        <span>{id.quantity}</span>

                                    </div>
                                    <div className={styles.paddingdata}>  <button className={styles.inc} onClick={() => dispatch(incrementQuantity(id.id))}><span>+</span></button></div>

                                    <div className={styles.paddingdata}>
                                        <button className={styles.rem}
                                            onClick={() => handleRemoveCard(id.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </>
                )
            })}


        </>
    )
}

export default CartDetail;
