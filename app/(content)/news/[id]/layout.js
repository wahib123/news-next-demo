import React from 'react'

const layout = ({children, modal}) => {
  return (
    <>
        {modal}
        {children}
    </>
  )
}

export default layout