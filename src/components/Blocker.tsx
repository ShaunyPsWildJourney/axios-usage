import  styled  from "styled-components"


export default function Blocker() {


  return (

    <Wrapper>

      <Message >CRUD requesting on mobile? Yeah right. . </Message>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Message = styled.div`
  width: 70%;
  text-align: center;
  font-size: 1.8rem;
`