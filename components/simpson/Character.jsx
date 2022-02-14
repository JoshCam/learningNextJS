import Button from "./Button";
import Image from "./Image";
import Quote from "./Quote";

const Character = (props) => {
  return (
    <div className="mt-5">
      <Image image={props.data.image} />
      <Quote quote={props.data.quote} />
      <Button />
    </div>
  );
};

export default Character;
