import React from 'react'
import { ButonComponent } from './styles'

const Button = ({text,btnpageactivated=false}) => {
  return (
    <ButonComponent  btnpageactivated={btnpageactivated}>
      {text}
    </ButonComponent>
  )
}

export default Button