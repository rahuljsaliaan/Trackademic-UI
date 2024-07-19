interface InputWithLabelProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  id?: string;
}

interface ButtonProps {
  buttonText: string;
  buttonColor?: string;
  buttonPadding?: string;
}

interface InputWithLabelAndButtonProps extends InputWithLabelProps, ButtonProps {}

const InputWithLabelAndButton: React.FC<InputWithLabelAndButtonProps> = ({
  label,
  placeholder,
  type = 'text',
  name,
  id,
  buttonText,
  buttonColor = 'blue',
  buttonPadding = '10px 20px',
}) => {
  const inputStyle = {
    fontFamily: 'Manrope',
    fontSize: '14px',
    fontWeight: '700',
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    padding: buttonPadding,
    border: '2px solid #131313',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
  };

  return (
    <div className="input-with-label-and-button">
        <div className="input-with-label-div">
            <label htmlFor={id || name}>{label}</label>
            <input
                type={type}
                id={id || name}
                name={name}
                placeholder={placeholder}
                style={inputStyle}
            />
        </div>
        <div className="input-button-container">
            <button style={buttonStyle}>{buttonText}</button>
        </div>
    </div>
  );
};

export default InputWithLabelAndButton;
