import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForgotPassword } from '../../redux/forgotPass/action'

const ForgotPass = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const loadingStatus = useSelector((state) => state.registerReducer.loading);
    
    const onSubmit = data => {
        console.log(data)
        const payload = {
            identity: data.identity,
        }   
        dispatch(fetchForgotPassword(payload));
    }

    const LoadingButton = () => {
        if(loadingStatus === false) {
            return (
                <input type="submit" className="btn btn-success" id="login-btn" value="Submit" />
            )
          } else {
            return (
                <button className="btn btn-success" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </button>
            )
        }
    }

    return (
        <div className="container" style={{padding:"30px"}}>
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
                                <h3>Lupa Password</h3>
                                <span>silahkan masukan data pada kolom dibawah</span>
                            </div>
                            <div className="col-md-8 col-sm-12">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-12">
                                        <label className="form-label">Email atau Nomor Telepon</label>
                                        <input type="text" className="form-control" placeholder="Email atau Nomor Telepon 08??? / 62??? / +62???" {...register("identity", { required: true })} autoFocus/>
                                        <span className="text-danger">{errors.identity && "Silahkan isi email atau nomor telepon"}</span>
                                    </div>
                                    <div className="col-12">
                                        <div className="row mt-3">
                                            <div className="col d-grid gap-2">
                                                {LoadingButton()}
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

export default ForgotPass
