

const bootToast = () => {

    const onClose = () => {
        console.log("close")
        document.querySelector(".halped-alert").remove();
    }
    
    return (<div className="alert alert-primary halped-alert" role="alert">
            A simple primary alert—check it out!
        </div>)

    // return (
    //         <div className="alert alert-warning alert-dismissible fade show halped-alert" role="alert">
    //             <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    //             <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => onClose()}></button>
    //         </div>)
}

export default bootToast