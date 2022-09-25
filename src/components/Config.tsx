import styled from 'styled-components';

interface Thing {
  completed:boolean;
  id:number;
  title:string;
  userId:number;
}

export default function DataView( props: any ) {

  const { posts } = props; 


  return (
    <Wrapper>
      <Header>Todo List</Header>
    {posts && 

      [...posts].map((item, index) => {
        return (
          <Container key={index}>
            <ID>{item.id} : </ID>
            <div>{item.title}</div>
          </Container>
        )
      })    
    }
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.1rem;
  text-align: left;

`;
const Header = styled.div`
  width: 60%;
  font-size: 2rem;
  background-color: lightblue;
  border: 2px solid lightblue;
  border-radius: 10px;
  padding: 5px;
`;
const Container = styled.div`
  display: flex;
  width: 60%;
  border: 2px solid lightblue;
  border-top: none;
  padding: 2px;
  box-shadow: 3px 8px 8px rgba(0,0,0,0.1);
`;
const ID = styled.div`
  font-weight: 600;
  margin-right: 1.4rem;
`