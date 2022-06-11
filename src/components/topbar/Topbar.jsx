import React from 'react'
import './topbar.scss'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar(props) {
  const {menuOpen,setMenuOpen}=props
  function clickHandler(){
    setMenuOpen(!menuOpen)
  }
  return (
    <div className={'topbar '+(menuOpen?"active":"")}>
      <div className="wrapper"> 
      <div className="left">
        <a href='#works' className='logo '>Portfolio</a>
        <div className="leftContainer">
          <div className="containerItem">
            <PersonIcon className='itemIcon'/>
            <span className='itemText'>8780841384</span>
          </div>
          <div className="containerItem">
            <EmailIcon className="itemIcon"/>
            <span className='itemText'>yash@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="hamburger" onClick={clickHandler}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>
      </div>
    </div>
  )
}
