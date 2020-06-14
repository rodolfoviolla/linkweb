import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
  state = {
    links: []
  }

  loadLinks = async () => {
    const response = await api.get('/links')

    this.setState({ links: response.data.docs })
  }
  
  componentDidMount() {
    this.loadLinks()
  }

  render() {
    const { links } = this.state
    let cont = -1

    return (
      <div className="link-list">

        {links.map(link => {
          (cont >= 4) ? cont = 0 : cont++

          console.log(cont)

          return (
            <article key={link._id} className={`a${cont}`}>
              <strong>{link.title}</strong>
              <p>{link.description}</p>
              <a target="_blank" href={link.url}>Acessar</a>
            </article>
          )
        })}

        <div className="actions">
          <span id="previous"></span>
          <span id="next"></span>
        </div>
      </div>
    )
  }
}