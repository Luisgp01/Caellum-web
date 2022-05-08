import { useAuthContext } from "../../contexts/AuthContext"

const Favorites = () => {
  const { user } = useAuthContext()

  return (
    <div className="Favorites">
      <h1 className="mt-3">Favorites</h1>

      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

export default Favorites
