import { useState } from "react";
type Props = {};
const Button = (props: Props) => {
  const [counterNew, setCounterNew] = useState(0);
  const Increment = () => {
    setCounterNew((prevState: number) => prevState + 1);
  };
  return (
    <>
      <button onClick={Increment}>Change count({counterNew})</button>
    </>
  );
};
export default Button;
