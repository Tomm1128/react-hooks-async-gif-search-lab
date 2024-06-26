import React, { useEffect, useState } from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

const key = "HlSJiQas7KM6z8L3zZeN6zCc7LUjFMVI"

function GifListContainer() {
  const [gifs, setGifs] = useState(null)
  const [search, setSearch] = useState("Wallace and Gromit")
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const sanitizeSearch = () => {
    const sanitizedSearch = search.replace(/[^A-Z0-9]+/gi, "")
    return sanitizedSearch.toLowerCase()
  }

  const updateFetch = () => setFetchTrigger(!fetchTrigger)

  const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${sanitizeSearch()}&api_key=${key}&rating=g`

  useEffect(() => {
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((gifResp) => {
        let gifUrls = gifResp.data.map((gif) => {
          return gif.images.original.url
        })
        setGifs(gifUrls.slice(0, 3))
      })
  }, [fetchTrigger])

  return (
    <div>
      <GifSearch
        searchInput={search}
        updateSearch={setSearch}
        updateFetch={updateFetch}
      />
      <GifList gifs={gifs} />
    </div>
  )
}

export default GifListContainer
