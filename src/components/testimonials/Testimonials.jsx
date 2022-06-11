import React from 'react'
import './testimonials.scss'

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>

    <div className='main'>
      <h1 style={{color:"white"}}>Testmonials</h1>
      <div className="container">
          {data.map((m) => (

            <div className="card" key={m.id}>
              <div className="top">
                <img src="assets/right-arrow.png" alt="" className="left" />
                <img src={m.img} alt="" className='middle' />
                <img src={m.icon} alt="" className="right" />
              </div>
              <div className="center">{m.desc}</div>
              <div className="bottom">
                <div className="bottomName">{m.name}</div>
                <div className="bottomPosition">{m.title}r</div>
              </div>

            </div>
          )
          )
        }
        </div>
      </div>
    </div>
  )
}
