import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postform';
import Users from './components/users';
import NavigationBar from './components/navigationbar';
import { Provider } from 'react-redux';
import store from './store';
import {Header} from './components/header';
import UserPosts from './components/userposts';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      view: "posts"
    }
  }

  navigate = (selectedView) =>{
    if(selectedView === 'users'){
      this.setState({view: "users"});
    }else if(selectedView === 'posts'){
      this.setState({view: "posts"});
    } else if(selectedView === 'userPosts'){
      this.setState({view: 'userPosts'});
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavigationBar navigate={this.navigate}/>
          <Header/>
          <div className={'main-container'}>
            {this.state.view === 'users' && <Users navigate= {this.navigate}/>}
            {this.state.view === 'posts' && <PostForm />}
            {this.state.view === 'posts' && <Posts />}
            {this.state.view === 'userPosts' && <UserPosts navigate = {this.navigate}/>}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
