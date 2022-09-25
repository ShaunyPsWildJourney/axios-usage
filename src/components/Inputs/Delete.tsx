import { ForwardedRef } from 'react';
import styled from 'styled-components';



type IProps = {
  trackInput: () => void; 
  deleteRef: ForwardedRef<HTMLInputElement>; 
}

export default function Delete( {trackInput , deleteRef } : IProps) {


  return (
    <Inputs placeholder='delete an ID' type='number' min='0' max='201' ref={deleteRef} onChange={trackInput}/>

  )
}


const Inputs = styled.input`
  width:80%;
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
`;