import React, { Component } from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postform';
import Users from './components/users';
import NavigationBar from './components/navigationbar';
import { Provider } from 'react-redux';
import store from './store';
import {Header} from './components/header';


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
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavigationBar navigate={this.navigate}/>
          <Header/>
          <div className={'main-container'}>
            {this.state.view === 'users' && <Users />}
            {this.state.view === 'posts' && <PostForm />}
            {this.state.view === 'posts' && <Posts />}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
