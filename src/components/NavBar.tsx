import styled from 'styled-components'

function NavBar() {
  return (
    <Nav>
        <div>Axios Examples</div>
    </Nav>
  )
}

export default NavBar

const Nav = styled.div`
  position: relative;
  width: 100%; 
  height: 70px; 
  background-color: #ebebeb;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;

`