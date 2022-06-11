import React from 'react'
import "./menu.scss"

export default function menu(props) {
    const {menuOpen,setMenuOpen}=props
    function clickHandler(){
        setMenuOpen(!menuOpen)
    }
  return (
    <div className={'menu '+(menuOpen?"active":"")}>
        <ul>
            <li onClick={clickHandler}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={clickHandler}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={clickHandler}>
                <a href="#works">Works</a>
            </li>
            <li onClick={clickHandler}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={clickHandler}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
