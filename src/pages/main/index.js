import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import api from '../../services/api'
import './styles.css'

export default function Main() {
  const [links, setLinks] = useState([])
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState()
  let cont = -1
  
  useEffect(() => {
    awaitApi('/links')
  }, [])

  async function awaitApi(route) {
    const response = await api.get(route)
    
    setLinks(response.data.docs)
    setTotalPages(Number(response.data.pages))
    setCurrentPage(Number(response.data.page))
  }

  function previousPage() {
    if (currentPage !== 1) {
      awaitApi(`/links?page=${currentPage - 1}`)
    }
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      awaitApi(`/links?page=${currentPage + 1}`)
    }
  }

  return (
    <>
      <Header title={'Links Úteis'} src={'main'} />
      <div className="link-list">
        {links.map(link => {
          (cont >= 4) ? cont = 0 : cont++

          return (
            <article key={link._id} className={`a${cont}`}>
              <div id="text">
                <strong>{link.title}</strong>
                <p>{link.description}</p>
              </div>
              <div id="link">
                <a target="_blank" rel="noopener noreferrer" href={link.url}></a>
              </div>
            </article>
          )
        })}

        <div className="actions">
          <span disabled={currentPage === 1} id="previous" onClick={previousPage} ></span>
          <span disabled={currentPage === totalPages} id="next" onClick={nextPage} ></span>
        </div>
      </div>
    </>
  )
}