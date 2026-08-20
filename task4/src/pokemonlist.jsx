import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PokemonList() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results)
        setLoading(false)
      })
      .catch((err) => {
        setError('Failed to load Pokemon')
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <div className="container">
      <h1>Pokemon List</h1>
      <div className="pokemon-grid">
        {pokemon.map((p) => (
          <Link key={p.name} to={`/pokemon/${p.name}`} className="pokemon-card">
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PokemonList