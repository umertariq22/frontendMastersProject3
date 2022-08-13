
import './Submit.css'
const Submit = () =>{
    return(
        <div className='success-container'>
            <img src="icon-complete.svg" alt="" />
            <h1 className="thank">Thank You!</h1>
            <p className="text">
                We've added your card details
            </p>
            <button>
                Continue
            </button>
        </div>
    )
}
export default Submit;