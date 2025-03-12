import React from 'react'
import { ButonComponent } from './styles'

const Button = ({text,type,onClick,btnpageactivated='false',variant='secondary'}) => {
  return (
    <ButonComponent variant={variant}
      onClick={onClick}
      btnpageactivated={btnpageactivated}
      type={type}
      >
      {text}
    </ButonComponent>
  )
}

export default Button