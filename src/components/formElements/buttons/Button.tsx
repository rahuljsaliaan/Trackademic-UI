interface ButtonProps {
  text: string;
  color?: string;
  padding?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ text, color = 'blue', padding = '10px 20px', width = 'auto'}) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: padding,
    width: width,
    border: 'none',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
  };

  return (
    <button className="formButton" style={buttonStyle}>
      {text} 
    </button>
  );
};

export default Button;