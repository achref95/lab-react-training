import { useState } from "react"

const Carousel = ({images}) => {
    const [index, setIndex] = useState(0)
    const image = images[index]

    const previous = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
      }
    
    const next = () => {
        setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      }

  return (
    <div>
      <button onClick={previous}>previous</button>
      <img src={image} alt="Carousel images" />
      <button onClick={next}>next</button>
    </div>
  )
}

export default Carousel
