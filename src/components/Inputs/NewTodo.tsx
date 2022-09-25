import { ForwardedRef } from 'react';
import styled from 'styled-components';



type IProps = {
  trackInput: () => void; 
  postRef: ForwardedRef<HTMLInputElement>; 
}

export default function NewTodo( {trackInput , postRef } : IProps) {
  

  return (
    <Inputs placeholder='Enter new todo here' type='text' ref={postRef} onChange={trackInput}/>

  )
}


const Inputs = styled.input`
  width:80%;
  padding: 1rem;
  font-size: 1.4rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
`;