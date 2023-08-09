import CardStyling from "./Card.module.css";
const Card = (props) => {
  return <div className={CardStyling.card}>{props.children}</div>;
};
export default Card;
