import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const RegisterPass = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ show, setShow] = useState()
    const [ show2, setShow2] = useState()
    const [ pass, setPass] = useState()
    const [ cpass, setCPass] = useState()
    
    const onSubmit = data => {
        if (data.password === data.cpassword) {
            console.log(data)
            const payload = {
                pass,
                cpass
            }
        } else {
            alert('password tidak sama')
        }
    }

    const peekPass = (val) => {
        const passInp = document.getElementById('peek'+val);
        console.log(passInp, 'adawdwadwa')
        if (passInp.type === "password") {
            passInp.type = "text";
            val === 1 ? setShow(0) : setShow2(0)
        } else {
            passInp.type = "password";
            val === 1 ? setShow(1) : setShow2(1)
        }
    }

    const faPeek = () => {
        if (show === 0) {
            return (<FontAwesomeIcon icon={faEye} />)
        } else {
            return (<FontAwesomeIcon icon={faEyeSlash} />)
        }
    }

    const faPeek2 = () => {
        if (show2 === 0) {
            return (<FontAwesomeIcon icon={faEye} />)
        } else {
            return (<FontAwesomeIcon icon={faEyeSlash} />)
        }
    }

    return (
        <div className="container" style={{padding:"20px"}}>
            <div className="row login h-100 m-auto">
                <div className="col-md-6 col-sm-12 col-image p-0">
                    <img src="https://i.pinimg.com/originals/49/f5/35/49f5359e9fdd391a66237bf89253d742.jpg" alt="" />
                </div>
                <div className="col-md-6 col-sm-12 form-login p-3">
                        <div className="col-12 halped-logo">
                            <img src="https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2020/05/20200508141144-5eb50630deaf4-3desktoplogo.jpg" alt="" />
                        </div>
                        <div className="col-12 halped-form">
                            <div className="row login-field justify-content-center">
                                <div className="col-md-8 login-welcome mt-2">
                                    <h3>Password</h3>
                                    <span>masukan password atau kata sandi</span>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-12">
                                            <label className="form-label">Identitas</label>
                                            <input type="text" className="form-control" value="latifbaraba88@gmail.com" {...register("identity")} disabled/>
                                            <span className="text-danger">{errors.identity && "error"}</span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Password" id="peek1" aria-describedby="button-pass" {...register("password", { required: true, minLength: 6 })}/>
                                                <button className="btn" type="button" id="button-pass" onClick={() => peekPass(1)} onChange={(e) => setPass(e.value.target)}>
                                                    {/* <FontAwesomeIcon icon={faEye} /> */}
                                                    {faPeek()}
                                                </button>
                                            </div>
                                            <span className="text-danger">{errors.password && "Silahkan isi password & Minimum 6 karakter"}</span>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Confirm Password</label>
                                            <div className="input-group">
                                                <input type="password" className="form-control" placeholder="Confirm Password" id="peek2" aria-describedby="button-pass" {...register("cpassword", { required: true, minLength: 6 })}/>
                                                <button className="btn" type="button" id="button-pass" onClick={() => peekPass(2)} onChange={(e) => setCPass(e.value.target)}>
                                                    {/* <FontAwesomeIcon icon={faEye} /> */}
                                                    {faPeek2()}
                                                </button>
                                            </div>
                                            <span className="text-danger">{errors.cpassword && "Silahkan isi password & Minimum 6 karakter"}</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="row mt-3">
                                                <div className="col d-grid gap-2">
                                                    <input type="submit" className="btn btn-success" id="login-btn" value="Submit" />
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

export default RegisterPass
