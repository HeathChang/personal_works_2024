import {useState, useRef} from 'react';
import classes from './Auth.module.css';
import {useDispatch} from "react-redux";
import {authActions} from "../store";

const Auth = () => {
    const dispatch = useDispatch();
    // const idRef = useRef();
    // const passwordRef = useRef();
    const [id, setId] = useState();
    const [password, setPassword] = useState('');

    const onChangeIdInput = (event) => {
        setId(event.target.value);
    };

    const onChangePasswordInput = (event) => {
        setPassword(event.target.value);
    };
    const onClickLoginBtn = (event) => {
        event.preventDefault();
        // console.log(idRef.current?.value, passwordRef.current?.value)
        dispatch(authActions.login());
    };
    return (
        <main className={classes.auth}>
            <section>
                <form>
                    <div className={classes.control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={id || ''} onChange={onChangeIdInput}/>
                        {/*<input type="email" id="email" ref={idRef}*/}
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"  value={password} onChange={onChangePasswordInput}/>
                        {/*<input type="password" id="password" ref={passwordRef} />*/}
                    </div>
                    <button onClick={onClickLoginBtn}>Login</button>
                </form>
            </section>
        </main>
    );
};

export default Auth;
