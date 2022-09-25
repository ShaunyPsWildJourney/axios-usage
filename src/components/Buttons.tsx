import styled from "styled-components"

type IProps = {
  func: () => void;
  name: string; 
  color: string; 
  disabled?: any;
}

export default function Buttons( {func, name, color, disabled}: IProps  ) {


  return (

      <Button onClick={func} 
              style={{backgroundColor: `${color}`}}
              disabled={disabled}
              >{name}
      </Button>
  )
}

const Button = styled.button`
  border-radius: 3px;
  border: none;
  width: 6rem;
  height:3rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  &:active {
    transition: all 0.1s;
    box-shadow: inset 3px 3px 3px rgba(0,0,0,0.4);
  }
`;