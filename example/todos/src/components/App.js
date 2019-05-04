import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'
import PropTypes from 'prop-types'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({toggle}) => {
  switch(toggle){
  	case 'Add':
  		return (
  			<AddTodo/>
  		)
  	case 'List':
  		return (
  			<VisibleTodoList/>
  		)
  	case 'Footer':
  		return (
  			<Footer/>
  		)
  	default:
  		return(
  			<VisibleTodoList/>
  		)
  }
}

App.propTypes = {
  toggle:PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  toggle:state.toggleListModal
})

export default connect(mapStateToProps)(App)
