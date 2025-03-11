import React from 'react'
import { ButonComponent } from './styles'

const Button = ({text,btnpageactivated=false,variant='secondary'}) => {
  return (
    <ButonComponent variant={variant}
      btnpageactivated={btnpageactivated}>
      {text}
    </ButonComponent>
  )
}

export default Button