import React from "react"

function GifSearch({ searchInput, updateSearch, updateFetch }) {
  const handleInput = ({ target }) => updateSearch(target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    updateFetch()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search gif: </label>
        <input type="text" value={searchInput} onChange={handleInput}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default GifSearch
