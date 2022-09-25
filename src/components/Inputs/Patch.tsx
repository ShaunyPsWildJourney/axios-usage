import { ForwardedRef } from 'react';
import styled from 'styled-components';



type IProps = {
  trackInput: () => void; 
  patchRef: ForwardedRef<HTMLInputElement>; 
  patchIDRef: ForwardedRef<HTMLInputElement>; 
}

export default function Delete( {trackInput , patchRef, patchIDRef } : IProps) {


  return (<>
    <Inputs placeholder='Id?' type='number' min='0' max='200' ref={patchIDRef} onChange={trackInput}/>
    <Inputs placeholder='Todos details' type='text'  ref={patchRef} onChange={trackInput}/>

    </>)
}


const Inputs = styled.input`
  width:80%;
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
`;