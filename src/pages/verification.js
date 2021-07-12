import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Verification = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data)
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
                                    <h3>Verifikasi</h3>
                                    <span>masukan kode verifikasi</span>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="col-12">
                                            <label className="form-label">6 angka PIN</label>
                                            <input type="text" className="form-control" placeholder="xxxx" {...register("pin", { required: true })} autoFocus/>
                                            <span className="text-danger">{errors.pin && "Silahkan isi PIN verifikasi"}</span>
                                        </div>
                                        <div className="col-12">
                                            <div className="row mt-3">
                                                <div className="col d-grid gap-2">
                                                    <input type="submit" className="btn btn-primary" id="login-btn" value="Submit" />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col d-grid gap-2">
                                                    <span className="text-secondary">Atau</span>
                                                    <button className="btn btn-outline-secondary">Kirim Ulang</button>
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

export default Verification
