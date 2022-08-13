import './BackCard.css'
const BackCard = (props) =>{
    return(
        <div className="back-card">
            <p className="cvv">{props?.cvv}</p>
        </div>
    )
}
export default BackCard;