import styles from '../pages/contact.module.scss';
import Image from 'next/image';
import { createUser } from '../services/api/endpoints';
import { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const data = await createUser(name, email, phone)
            setUser(data);
            if (data) {
                setName('');
                setEmail('');
                setUser('');
                setPhone('');

            }
        }
        catch (error) {
            console.error(error)
        }

    }

    return (<>
        <> <div className="container-fluid text-center">
            <div className=" row justify-content-center mt-5 mb-5">
                <div className={`${styles.formdata} col-md-4  col-sm-8 col-xs-12`}>
                    <form onSubmit={handleSubmit}>
                    <div className={styles.contact}><h1>Contact Us!</h1></div>
                        <div className="form-group">
                            <label htmlFor="input1">Name</label>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control" id="input1" name='name' autoComplete='off' required />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="input2">Email</label>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control" id="input2" name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" autoComplete='off' required />
                        </div>
                        <div className="form-group" >
                            <label htmlFor="input2">Mobile Number</label>
                            <input autoComplete='off' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" name="phone" className="form-control" required />
                        </div>

                        <button type="submit" className="btn btn-primary"  >Submit</button>
                    </form>

                </div>
                <div className={`${styles.imageBg} col-md-4 col-sm-8 col-xs-12`}>
                    <Image
                        src="/homeimg/contact.svg"
                        alt="Description of the image"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div></>
    </>

    )
}
export default Contact;