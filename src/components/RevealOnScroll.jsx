import React, { useState, useEffect, useRef } from 'react'

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef(null)

  const callBackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

 useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
           domRef.current.classList.add('visible');
        }
    }, {threshold: 0.2, rootMargin: '0px 0px -50px 0px'});

    if (domRef.current) observer.observe(domRef.current)

    return () => observer.disconnect()
  }, [domRef])

  return (
    <div
      className='reveal'
      ref={domRef}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll
