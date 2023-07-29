import { useState } from "react"

const LikeButton = () => {
    const colors = ['purple','blue','green','yellow','orange','red']
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomIndex]

    const [count, setCount] = useState(0)

  return (
    <div>
      <button 
        style={{ backgroundColor: randomColor }}
        onClick={() => setCount(count + 1)}>
            {count} Likes
        </button>
    </div>
  )
}

export default LikeButton
