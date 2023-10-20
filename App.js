import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Card from './components/Card'

class App extends Component {
  state = {count: 0, isShow: false, userList: [], text: ''}

  add = event => {
    event.preventDefault()
    const web1 = document.getElementById('website').value
    const user1 = document.getElementById('username').value
    const pass1 = document.getElementById('password').value
    const newContact = {
      id: uuidv4(),
      website: web1,
      username: user1,
      password: pass1,
    }
    this.setState(prev => ({
      count: prev.count + 1,
      userList: [...prev.userList, newContact],
    }))
  }

  change = () => {
    this.setState(prev => ({isShow: !prev.isShow}))
  }

  del = id => {
    const {userList} = this.state
    const updt = userList.filter(each => each.id !== id)
    this.setState(prev => ({
      count: prev.count - 1,
      userList: updt,
    }))
  }

  search = event => {
    this.setState({text: event.target.value})
  }

  search1 = () => {
    const {userList, text} = this.state
    const fil = userList.filter(each => each.website.includes(text))
    console.log(fil)
    return fil
  }

  render() {
    // eslint-disable-next-line
    const {count, isShow, userList, text} = this.state
    const fil = this.search1()
    console.log(fil)
    return (
      <div className="bg">
        <div className="main">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logo"
            alt="app logo"
          />
          <form className="c1">
            <div className="info">
              <h1>Add New Password</h1>
              <div className="inp">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="img"
                  alt="website"
                />
                <input type="text" id="website" placeholder="Enter Website" />
              </div>
              <div className="inp">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="img"
                  alt="username"
                />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
              <div className="inp">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="img"
                  alt="password"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="but">
                <button type="submit" onClick={this.add}>
                  Add
                </button>
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="img1"
              alt="password manager"
            />
          </form>
          <div className="c2">
            <div className="nav">
              <div className="l1">
                <h1>Your Passwords</h1>
                <p>{count}</p>
              </div>
              <div className="search">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  type="search"
                  placeholder="Search"
                  onChange={this.search}
                  value={text}
                />
              </div>
            </div>
            <hr />
            <div className="check">
              <input type="checkbox" id="pass" onChange={this.change} />
              <label htmlFor="pass">Show Passwords</label>
            </div>
            {(count === 0 || fil.length === 0) && (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="big"
                />
                <p>No Passwords</p>
              </>
            )}

            <ul>
              {fil.map(each => (
                <Card
                  key={each.id}
                  each={each}
                  web={each.website}
                  user={each.username}
                  pass={each.password}
                  isShow={isShow}
                  del={this.del}
                />
              ))}
            </ul>
            {isShow && <p>password provided</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default App
