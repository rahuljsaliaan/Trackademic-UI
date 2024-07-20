interface InputWithLabelProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  id?: string; 
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder,
  type = 'text',
  name,
  id,
}) => {
  const inputStyle = {
    fontFamily: 'Manrope',
    fontSize: '14px',
    fontWeight: '700',
  };
  return (
    <div className="input-with-label">
      <label htmlFor={id || name}>{label}</label>
      <input
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );
};

export default InputWithLabel;