// Write your code here
import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'
import './index.css'

class Home extends Component {
  state = {isLoged: false}

  change = () => {
    this.setState(pState => {
      if (pState.isLoged) {
        return {isLoged: false}
      }
      return {isLoged: true}
    })
  }

  render() {
    const {isLoged} = this.state
    return (
      <div className="d1">
        <div className="d2">
          <h1>jdkfvbsdfbgdi</h1>
          {!isLoged
            ? (<Message state={isLoged} />)(<Login change={this.change} />)
            : (<Message state={isLoged} />)(<Logout change={this.change} />)}
        </div>
      </div>
    )
  }
}

export default Home
