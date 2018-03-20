import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Post from '../../components/Post/index'
import store from '../../store'
import { fetchData } from '../../actions/postsActionCreators'
import * as actionCreators from '../../actions/postsActionCreators'


class LandingPage extends Component {
  componentWillMount(){
    store.dispatch(fetchData())
  }
  render() {
     if(this.props.posts){
       const mappedPost = this.props.posts.map(post => <Post key={post._id} post={post}/>)
      return(
      <div>
        {mappedPost}
      </div>
      )
    }
    else {
    return( <div>LandingPage</div> )
    }
  }
}

store.subscribe(() =>{
  console.log("Store changed: " + store.getState());
})


function mapStateToProps(state) {
  return { ...state.posts }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
