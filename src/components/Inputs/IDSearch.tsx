import { ForwardedRef } from 'react';
import styled from 'styled-components';



type IProps = {
  trackInput: () => void; 
  paramRef: ForwardedRef<HTMLInputElement>; 
}

export default function IDSearch( {trackInput , paramRef } : IProps) {


  return (
    <Inputs placeholder='search an id' type='number' min='0' max='201' ref={paramRef} onChange={trackInput}/>

  )
}


const Inputs = styled.input`
  width:80%;
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
`;