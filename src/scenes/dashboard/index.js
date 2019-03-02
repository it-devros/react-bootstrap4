import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'


import './style.scss'

const mapStateToProps = (state) => {
	return ({
	})
}


const mapDispatchToProps = (dispatch) => {
	return ({
	})
}


class Dashboard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="dashboard-page">
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


