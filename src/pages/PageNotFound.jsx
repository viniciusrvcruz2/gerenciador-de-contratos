import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {

  const divStyle = {
    margin: '20px 20px 500px',
  };
  return (
    <div style={divStyle}>Pagina não encontrada Volte para o <Link to="/gerenciador-de-contratos">home</Link></div>
  )
}
