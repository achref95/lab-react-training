import { useState } from "react";

const ClickablePicture = ({ img, imgClicked }) => {
  const [image, setImage] = useState(img)

  const handleClick = () => {
    setImage((prevImage) => (prevImage === img ? imgClicked : img))
  }

  return (
    <div>
      <img src={image} onClick={handleClick} style={{ cursor: "pointer" }} alt="Clickable Picture" />
    </div>
  )
}

export default ClickablePicture;
