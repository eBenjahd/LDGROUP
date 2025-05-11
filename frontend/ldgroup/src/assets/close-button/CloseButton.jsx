import './CloseButton.scss'

function CloseButton({onClose}) {
  return (
    <div  className='close-button' onClick={onClose}>
      <div className="line line1"></div>
      <div className="line line2"></div>
    </div>
  )
}

export default CloseButton
