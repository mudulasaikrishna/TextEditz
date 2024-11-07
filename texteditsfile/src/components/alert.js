import React from 'react'
import './alert.css'

export default function Alert(props) {
  return (
    props.alert && <div className={`vc alert zz alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.typ}</strong>{props.alert.msg}
    </div>
  )
}
