import './TrashIcon.scss'; 

const TrashIcon = ({ 
    width = 22, 
    height = 22, 
    color = "#000", 
    onClick 
  }) => (
    <svg
      className={`trash-icon`}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick} // Pasamos la función onClick aquí
    >
      {/* Agarre superior más redondeado */}
      <path 
        d="M10 4c0-1 4 0 4 0" // Esta curva hace que el agarre sea más redondeado
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
  
      {/* Línea de tapa */}
      <path d="M4 6H20"  strokeWidth="1.5" strokeLinecap="round" />
  
      {/* Contenedor */}
      <rect
        x="6"
        y="6"
        width="12"
        height="14"
        rx="2"
        
        strokeWidth="1.5"
      />
  
      {/* Rayas verticales */}
      <line x1="9" y1="9" x2="9" y2="18"  strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="9" x2="12" y2="18"  strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="9" x2="15" y2="18"  strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
  
  export default TrashIcon;