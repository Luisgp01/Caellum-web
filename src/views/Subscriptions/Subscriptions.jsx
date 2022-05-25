import { useAuthContext } from "../../contexts/AuthContext"
import { useEffect } from "react"

const Subscriptions = () => {
  const { user, getUser } = useAuthContext()

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="Favorites">
      <h1 className="mt-3 h1">My Rates</h1>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-content="Top popover"
        >
          Unsubscribe
          <br />
          <i class="fa-solid fa-file"></i>
        </button>
        <button
          type="button"
          class="btn btn-warning"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="Right popover"
        >
          Cambiar plan
          <br />
          <i class="fa-solid fa-briefcase"></i>
        </button>
        <button
          type="button"
          class="btn btn-info"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="bottom"
          data-bs-content="Bottom popover"
        >
         Cambiar direccion
          <br />
          <i class="fa-solid fa-house-chimney"></i>
        </button>
        <button
          type="button"
          class="btn btn-success"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="left"
          data-bs-content="Left popover"
        >
          Cambio de titular
          <br />
          <i class="fa-solid fa-circle-user"></i>
        </button>
      </div>
      <div></div>
      {user.subscriptions.map((sub) => {
        return <p>{sub.targetUser.email}</p>;
      })}
    </div>
  );
}

export default Subscriptions