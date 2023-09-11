import React from 'react'

export default function About({image, about}) {
    const defaultdImg = image || "https://via.placeholder.com/215"

  return (
    <aside>
        <img src={defaultdImg} alt="blog logo"></img>
        <p>{about}</p>
    </aside>
  )
}
