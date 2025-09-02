const SearchIcon = ({ width = 17, height = 17, color = "#000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    viewBox="0 0 17 17"
  >
    <circle cx="7.808" cy="7.808" r="6.808" />
    <path d="M12.825 12.825L15.333 15.333" />
  </svg>
);

export default SearchIcon;