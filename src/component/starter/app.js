import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { LikeButton } from './likeButton';
// import { LikeButton } from './likeButton2';
import { AlertString } from './function';
import { MapList } from './render_list';
import CommentApp from './comment/CommentApp';

class App extends Component {
  render () {
    return (
      <div>
        {/* <LikeButton likedText='已赞' unLikedText='赞' /> */}
        <LikeButton words={{ likedText:'已赞赞', unLikedText:'赞赞'}} />
        <AlertString/>
        <MapList/>
        <CommentApp/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)