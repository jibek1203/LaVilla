
import { render } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import './Slider.css'



const SlideBox = ({images: {image}}) => {
  const [index, set] = useState(0)
  // const slides = [
  //   { id: 0, url: 'https://www.bemontmarbella.com/wp-content/uploads/2015/06/IMAGE220-1-620x378.jpg'},
  //   { id: 1, url: '' },
  //   { id: 2, url: 'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG?ixlib=rb-1.2.1&w=1534&q=80' },
  //   { id: 3, url: 'photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80' },
  // ]

  const slides = image?.map((image, index) => ({
    id: index,
    url: image
  }))

  // alert(JSON.stringify(slides))

  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), 3000), [])
  
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={item && key}
      className="bg"
      style={{ ...props, backgroundImage: `url(${item.url})` }}
    />
  ))
}

// render(<App />, document.getElementById('root'))
export default SlideBox
