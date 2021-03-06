import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import './mappanes.css';
import './map.png';
import logo from './uconn.png'

export default class MapPanes extends Component {
  constructor() {
    super();
    this.state = { name:'Harambe'}
  }

  render () {
    return (
      <div className="pane">
        <a href="https://uconn.edu/"><img src={logo} alt={"logo"} className="logo"/>  </a>
        <div className="background-image-because-browsers-are-dumb"></div>
        <div className="screen-1">
          <div className="search-part">
            <div>Welcome to <br /><span className="search-input">
              
              <FontAwesome name='search' tag='i' className="search-button" />
              <input type="button" className="search-button"/>

              <input type="text" placeholder={this.state.name} ></input>
            </span><br /> at UConn</div>
          </div>
          <div className="story-bar">
          </div>
        </div>
        <div className="screen-2">
          <div className="scr-2-bg" />
          <div className="scr-2-vcenter">
            <div className="scr-2-flex">
              <div className="leftside">
                <h1>Welcome to<br />at UConn</h1>
              </div>
              <div className="rightside">
                <div className="righttext">
                  <p>Here, you can learn about all of the amazing things happening every day at the University of Connecticut.</p>
                  <p>Try searching above, or continue scrolling for stories, facts, and more.</p>
                  <p className="teeny">If you’re looking for the old research.uconn.edu website, it has been moved to ovpr.uconn.edu.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
}
