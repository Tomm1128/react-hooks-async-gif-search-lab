import React, { useEffect, useState } from "react"
import GifList from "./GifList"

const key = "HlSJiQas7KM6z8L3zZeN6zCc7LUjFMVI"
const apiUrl = `https://api.giphy.com/v1/gifs/search?q=wallaceandgromit&api_key=${key}&rating=g`

function GifListContainer() {
  const [gifs, setGifs] = useState(null)

  useEffect(() => {
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((gifResp) => {
        let gifUrls = gifResp.data.map((gif) => {
          return gif.images.original.url
        })
        setGifs(gifUrls.slice(0, 3))
      })
  }, [])

  if (!gifs) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <GifList gifs={gifs} />
    </div>
  )
}

export default GifListContainer
