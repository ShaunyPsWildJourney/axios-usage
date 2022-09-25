import Buttons from "./Buttons";
import styled from "styled-components";




export default function ButtonWrapper(props: any) {


  return (
    <ButtonContainer>
      <Buttons 
          func={props.handleGET}
          name='GET'
          color='#65f791'
          disabled={props.loading}
      />
      <Buttons 
          func={props.handleGetParam}
          name="ID Search"
          color='#F5F073'
          disabled={props.loading}
      />
      <Buttons 
          func={props.handlePOST}
          name='New Todo'
          color='#F5B667'
          disabled={props.loading}
      />
      <Buttons 
          func={props.handlePatch}
          name='Patch'
          color='#8CD1F5' 
          disabled={props.loading}
      />
      <Buttons 
          func={props.handleDelete}
          name='Delete'
          color='#F57A87' 
          disabled={props.loading}
      />

  </ButtonContainer>
  )
}

const ButtonContainer = styled.main`
  width: 100%;
  height: 80px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
`;