import React, {Component} from 'react'

import './StudentSpotlight.css'
export default class StudentSpotlight extends Component {
  render () {
    const topClassName = "bg-container " + this.props.className
    return (
      <div className={topClassName}>
        <div className="bg-color"/>
        <div className="pic"/>
      </div>
    )
  }
}
