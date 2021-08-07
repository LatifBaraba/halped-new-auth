import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastFunction = (action, message, pos) => {

    // toast('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });

    const options = {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    // toast #action (#message, {#position})
    // position #top-left #top-center #top-right #bottom-left #bottom-center #bottom-right

    switch(action) {
        case 'success':
            return toast.success(message, {position: pos, options})
        case 'info':
            return toast.info(message, {position: pos, options})
        case 'warning':
            return toast.warn(message, {position: pos, options})
        case 'error':
            return toast.error(message, {position: pos, options})
        default:
            break
    }

}

export default ToastFunction