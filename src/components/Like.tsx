import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const Like = ({onClick}: Props) => {
  const [status, setStatus] = useState(false);
  const toogle = () => {
    setStatus(!status);
    onClick();
  }

  if (status) return <FaRegHeart size={50} color="red" onClick={toogle} />;
  return <FaHeart size={50} color="red" onClick={toogle}/>;
};

export default Like;
