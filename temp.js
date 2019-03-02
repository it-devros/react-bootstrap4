import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
	return ({
	})
}


const mapDispatchToProps = (dispatch) => {
	return ({
	})
}


class Home extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {

    return (
      <div className="">
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)


