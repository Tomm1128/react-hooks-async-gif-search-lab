import React, { useEffect, useState } from "react"

const key = "HlSJiQas7KM6z8L3zZeN6zCc7LUjFMVI"

function GifListContainer() {
  const [gifs, setGifs] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${key}&rating=g`
    )
      .then((resp) => resp.json())
      .then((gifResp) => {
        let gifUrls = gifResp.data.map((gif) => {
          return gif.images.original.url
        })
        setGifs(gifUrls.slice(0, 2))
      })
  }, [])

  if (!gifs) {
    return <h1>Loading...</h1>
  }

  return <div></div>
}

export default GifListContainer
