import React from "react"

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => {
        return (
          <li>
            <img src={gif}></img>
          </li>
        )
      })}
    </ul>
  )
}

export default GifList
