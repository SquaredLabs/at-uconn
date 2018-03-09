import React, {Component} from 'react'

import './StudentSpotlight.css'
export default class StudentSpotlight extends Component {
  render () {
    const story = this.props.story
    const article = story.article
    const topClassName = "bg-container " + this.props.className
    return (
      <div className={topClassName}>
        <div className="bg-color"/>
        <div className="subject">{story.subject}</div>
        <div className="text-area">

          <h1 className="at-uconn-text">at UConn:</h1>
          <h1>{article.title}</h1>
          <p>by {article.author.name} via {article.source} on {article.published}</p>
          <p><a href="#">Read More</a></p>
        </div>
        <div className="pic"/>
      </div>
    )
  }
}
