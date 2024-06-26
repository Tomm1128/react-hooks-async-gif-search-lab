import React from "react"

function GifList({ gifs }) {
  if (!gifs) {
    return <h1>Loading...</h1>
  }
  return (
    <ul>
      {gifs.map((gif) => {
        return (
          <li key={gif}>
            <img src={gif}></img>
          </li>
        )
      })}
    </ul>
  )
}

export default GifList
