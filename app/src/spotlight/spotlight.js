import React, {Component} from 'react'
import StudentSpotlight from './StudentSpotlight'
import './spotlight.css'

const spotlightComponents = {
  "StudentSpotlight": StudentSpotlight
}

const byKey = (key, a) => {
  let o = {}
  a.forEach(v => o[v[key]] = v)
  return o
}

export default class Spotlight extends Component {
  componentWillMount () {
    this.setState(Object.assign({}, this.state, {selected: 0, stories: [{type: "StudentSpotlight", article: {title: "Breakthroughs: One at a Time, Years Ahead of their Time", author: {} } } ]}))
      /* setImmediate(async () => {
      const stories = await this.getSpotlights()
      this.setState(Object.assign(this.state, {selected: Object.keys(stories)[0], stories}))
    }) */
  }

  render () {
    const story = this.state.stories[this.state.selected]
    const SpotlightRender = spotlightComponents[story.type]
    return (
      <div className="spotlight">
        <SpotlightRender className="story-container" story={story}/>
        <div className="chooser-bar">
          <select className="selector" onChange={this.changeFact}>
            {Object.keys(this.state.stories).map(k => <option value={k}>{k}</option>)}
          </select>
        </div>
      </div>
    )
  }
}
