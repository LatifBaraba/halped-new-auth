import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchValidatePass } from '../../redux/verificationPass/action'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VerificationPass = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const loadingStatus = useSelector((state) => state.validatePasswordReducer.loading)
    
    const [pin, setPin] = useState()

    const verifyToken = localStorage.getItem('verifyToken')
    // const identity = localStorage.getItem('identity')

    const onSubmit = data => {
        const payload = {
            pin: pin,
            verifyToken: verifyToken
        }   
        dispatch(fetchValidatePass(payload));
    }

    const LoadingButton = () => {
        if(loadingStatus === false) {
            return (
                <input type="submit" className="btn btn-primary" id="login-btn" value="Submit" />
            )
          } else {
            return (
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </button>
            )
        }
    }

    // const resendButton = () => {
    //     if (counter === 0) {
    //         return <button className="btn btn-outline-secondary" onClick={handleResend}>Kirim Ulang</button>
    //     } else {
    //         return <button className="btn btn-outline-secondary" onClick={handleResend} disabled>Kirim Ulang</button>
    //     }
    // }

    // const countDown = () => {
    //     counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    // }

    return (
        <div className="container" style={{padding:"20px"}}>
            <ToastContainer />
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
                                    <h3>Verifikasi</h3>
                                    <span>Kode verifikasi telah dikirimkan ke email anda !</span><br/>
                                    <span>Silahkan cek dan masukan pada kolom dibawah ini.</span>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-12">
                                            <label className="form-label">6 angka PIN</label>
                                            <input type="number" className="form-control" placeholder="123456" {...register("pin", { required: true })} onChange={e => setPin(e.target.value)} autoFocus/>
                                            <span className="text-danger">{errors.pin && "Silahkan isi PIN verifikasi"}</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="row mt-3">
                                                <div className="col d-grid gap-2">
                                                    {LoadingButton()}
                                                </div>
                                            </div>
                                            {/* <div className="row mt-3">
                                                <div className="col d-grid gap-2">
                                                    <span className="text-secondary">Atau tunggu {counter} detik untuk</span>
                                                    {resendButton()}
                                                </div>
                                            </div> */}
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

export default VerificationPass
