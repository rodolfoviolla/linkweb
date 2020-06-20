import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Modal from '../modal'
import './styles.css'

export default function Add() {
  const inputs = {
    title: '',
    description: '',
    url: ''
  }
  const [submit, setSubmit] = useState('no')

  function handleInputChange({ target }) {
    const { name, value } = target

    switch (name) {
      case 'title':
        inputs.title = value
        break
      case 'description':
        inputs.description = value
        break
      case 'url':
        inputs.url = value
        break
      default:
        break
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setSubmit('wait')

    const response = await api.post('/links', inputs)

    if (response.status === 200) {
      setSubmit('submited')

      setInterval(() => {
        setSubmit('ok')
      }, 2000)
    } else {
      setSubmit('error')
      
      setInterval(() => {
        setSubmit('no')
      }, 2000)
    }
  }

  return (
    <>
      {
        (
          (submit === 'wait') || 
          (submit === 'error') || 
          (submit === 'submited')
        ) && 
        <Modal state={submit} />
      }

      {submit === 'ok' && <Redirect to='/'/>}
      
      <Header title={'Adicionar Link'} src={'add'} />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input
            type="text"
            name="title"
            placeholder="Título"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Descrição"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="url"
            placeholder="Url"
            required
            onChange={handleInputChange}
          />
        </fieldset>

        <button type="submit">ADICIONAR</button>
      </form>
    </>
  )
}