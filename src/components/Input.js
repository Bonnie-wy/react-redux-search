import { StyledInput } from "./Input.styled";

const Input = ({ onChange, type = "text", placeholder = "" }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} />
  );
};

export default Input;
