//--========== Import du Style ==========--//
import './Card.scss'

//--========== Import Outils React ==========--//
import React from 'react'

export default function Card({children}) {

  return (

    <div className='card'>
        {children}
    </div>

  )

}
