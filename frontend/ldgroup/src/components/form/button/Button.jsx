import './Button.scss'

function Button({text}) {
  return (
    <>
      <button type='submit'> 
        {text}
      </button>
    </>
  )
}

export default Button
