import FrontCard from './FrontCard'
import BackCard from "./BackCard";
import './CardPlacement.css'

const CardPlacement = (props) =>{
    return (
        <div className="card-container">
          <div className="front">
            <FrontCard
              cardNo={props.cardNo}
              name={props.name}
              date={props.date}
            />
          </div>
          <div className="back">
            <BackCard cvv={props.cvv} />
          </div>
      </div>
    );
}
export default CardPlacement;