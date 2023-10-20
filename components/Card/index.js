import './index.css'

const Card = props => {
  const {each, web, user, pass, isShow, del} = props
  const {id} = each
  const h = user.substring(0, 1).toUpperCase()
  console.log(isShow)
  const dele = () => {
    del(id)
  }

  return (
    <li className="us">
      <h1>{h}</h1>
      <div>
        <p>{web}</p>
        <p>{user}</p>
        {!isShow ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        ) : (
          <p>{pass}</p>
        )}
      </div>
      <button type="button" onClick={dele} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default Card
