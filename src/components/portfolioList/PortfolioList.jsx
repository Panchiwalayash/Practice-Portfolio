import React from 'react'
import './portfolioList.scss'

export default function PortfolioList({id,title,active,setClicked}) {
  return (
    <li className={active?"portfolioList active":"portfolioList"} onClick={()=>setClicked(id)}>
      {title}
    </li>
  )
}
