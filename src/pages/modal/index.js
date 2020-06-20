import React from 'react'
import './styles.css'

export default function Modal({ state }) {
  const textModal = () => {
    switch (state) {
      case 'error':
        return 'Erro ao adicionar!'
      case 'wait':
        return 'Adicionando...'
      case 'submited':
        return 'Adicionado!'
      default:
        return ''
    }
  }

  return (
    <div id="modal">{textModal()}</div>
  )
}