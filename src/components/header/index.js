import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'



class Header extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    
  }

  render() {

    return (
      <div className="header-container">
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
          <Link className="navbar-brand" to="/">
            生活見守りクラウド
          </Link>
          
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-right-top">
              <li className="nav-item nav-user">            
                <Link className="dropdown-item" to="/dashboard"><i className="fa fa-user mr-2"></i>マイページ (ユーザー)</Link> 
              </li>
              <li className="nav-item nav-user">           
                <a className="dropdown-item" href="javascript:void(0)" onClick={this.handleLogout}><i className="fa fa-power-off mr-2"></i>ログアウト</a>
              </li>
            </ul>
          </div>
      </nav>
      </div>
    )
  }
}

export default Header


