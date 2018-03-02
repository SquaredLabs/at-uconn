import React, { Component } from 'react';

const byKey = (key, a) => {
  let o = {}
  a.forEach(v => o[v[key]] = v)
  return o
}

export default class QuotesPane extends Component {
  async getQuotes () {
    return byKey("ordinal", await (await fetch("//localhost:3000/quotes?select=ordinal%2Cbody&order=ordinal")).json())
  }

  componentWillMount () {
    this.setState(Object.assign({}, this.state, {selected: 0, facts: ['loading']}))
    setImmediate(async () => {
      const facts = await this.getQuotes()
      this.setState(Object.assign(this.state, {selected: Object.keys(facts)[0], facts}))
    })
  }

  changeFact = (e) => {
    this.setState(Object.assign(this.state, {selected: e.target.value}))
  }

  render () {
    return (
      <div className="fact-bg">
        <div className="quotes-textarea">
          <p>{this.state.facts[this.state.selected].body}</p>
          <select className="selector" onChange={this.changeFact}>
            {Object.keys(this.state.facts).map(k => <option value={k}>{k}</option>)}
          </select>
        </div>
      </div>
    )
  }

}
