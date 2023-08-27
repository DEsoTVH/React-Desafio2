import React from 'react'

export default function SocialButton(props) {
  return (
    <div>
        <button type="button" className="btn btn-light">{props.icon}</button>
    </div>
  )
}
