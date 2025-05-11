import './Button.scss'

function Button({text, Component}) {
  return (
    <>
      <button type='submit'> {text} <span> {Component} </span></button>
    </>
  )
}

export default Button
