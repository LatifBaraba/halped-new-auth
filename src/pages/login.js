import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import bootToast from '../helper/index'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ toast, setToast ] = useState(0)
    const [ show, setShow] = useState()
    
    const onSubmit = data => {
        console.log(data)
        setToast(bootToast())
    }

    const peekPass = () => {
        const passInp = document.getElementById("peek");
        if (passInp.type === "password") {
            passInp.type = "text";
            setShow(0)
        } else {
            passInp.type = "password";
            setShow(1)
        }
    }

    const faPeek = () => {
        if (show === 0) {
            return (<FontAwesomeIcon icon={faEye} />)
        } else {
            return (<FontAwesomeIcon icon={faEyeSlash} />)
        }
    }

    return (
        <div className="container" style={{padding:"20px"}}>
            <div className="toastsss">
                {toast}
            </div>
            <div className="row login h-100 m-auto">
                <div className="col-md-6 col-sm-12 col-image p-0">
                    {/* <img src="https://st.depositphotos.com/1054144/4016/v/600/depositphotos_40160207-stock-illustration-natural-green-background.jpg" alt=""/> */}
                    <img src="https://i.pinimg.com/originals/49/f5/35/49f5359e9fdd391a66237bf89253d742.jpg" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 form-login p-3">
                        <div className="col-12 halped-logo">
                            <img src="https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2020/05/20200508141144-5eb50630deaf4-3desktoplogo.jpg" alt="" />
                        </div>
                        <div className="col-12 halped-form">
                            <div className="row login-field justify-content-center">
                                <div className="col-md-8 login-welcome mt-2">
                                    <h3>Login</h3>
                                    <span>silahkan login ke akun anda</span>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-12">
                                            <label className="form-label">Identitas</label>
                                            <input type="email" className="form-control" placeholder="Email atau Nomor Telepon" {...register("name", { required: true })} autoFocus/>
                                            <span className="text-danger">{errors.name && "Silahkan isi email atau nomor telepon"}</span>
                                        </div>
                                        {/* <div className="col-4">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" {...register("password", { required: true })}/>
                                            <p className="text-danger">{errors.password && "Silahkan isi password"}</p>
                                        </div> */}
                                        <div className="col-12">
                                            <label className="form-label">Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Password" id="peek" aria-describedby="button-pass" {...register("password", { required: true, minLength: 6 })}/>
                                                <button className="btn" type="button" id="button-pass" onClick={peekPass}>
                                                    {/* <FontAwesomeIcon icon={faEye} /> */}
                                                    {faPeek()}
                                                </button>
                                            </div>
                                            <span className="text-danger">{errors.password && "Silahkan isi password & Minimum 6 karakter"}</span>
                                        </div>
                                        <div className="col-12 mt-2 login-extras">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                        Ingatkan Saya
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col text-end">
                                                    <Link to="/about">Lupa Kata Sandi ?</Link>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-12">
                                            <div className="row mt-3">
                                                <div className="col d-grid gap-2">
                                                    <input type="submit" className="btn btn-success" id="login-btn" value="Masuk" />
                                                </div>
                                                <div className="col d-grid gap-2">
                                                    <button className="btn btn-outline-primary">Daftar Sekarang</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-end">
                            <div className="pt-halped">© 2021, Halalpedia Indonesia</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Login
