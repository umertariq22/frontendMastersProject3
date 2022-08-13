import './FrontCard.css'
const FrontCard = (props) =>{

    return(
        <div className="front-card">
            <img src="/card-logo.svg" alt="" />
            <p className="card-number">{props?.cardNo}</p>
            <div className="lower-portion">
                <p className="name">{props?.name.toUpperCase()}</p>
                <p className="expiry-date">{props?.date}</p>
            </div>
        </div>
    )
}

export default FrontCard;