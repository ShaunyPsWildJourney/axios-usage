import styled from 'styled-components';



export default function AxiosReply( props: any ) {

  const { posts, headers, config } = props; 
  let configShorten = [...config].splice(11, config.length - 11)
  
  return (
    <Wrapper>

      {/* // YELLOW TOP */}
      <Positioner>
      <Header>Todo List</Header>
        {posts && 
          [...posts].map((item, index) => {
            return (
             
              <Container key={index} style={{backgroundColor: index % 2 !== 0 ? '#fff3f2' : 'none'}}>
                <ID style={{ marginLeft: '16px'}}>
                  {item.id} : </ID>
                <div>
                  {item.title}</div>
              </Container>
                   
            )
          })    
        }
      </Positioner>

 
      <Positioner >
      <Header>Headers</Header>
        { headers &&
          [...headers].map((arr: string, index:number ) => {
            return <Container key={index}  style={{backgroundColor: index % 2 !== 0 ? '#fff3f2' : 'none'}}>
              <div  style={{ marginLeft: '16px'}}>{arr.replaceAll('"','').replaceAll('{','').replaceAll('}','')}</div>
            </Container>
          })
         } 

      <Header>Config</Header>
        { headers &&
          [...configShorten].map((arr: string, index:number ) => {
            return <Container key={index}  style={{backgroundColor: index % 2 !== 0 ? '#fff3f2' : 'none'}}>
              <div  style={{ marginLeft: '16px'}}>{arr.replaceAll('"','').replaceAll('{','').replaceAll('}','')}</div>
            </Container>
          })
         } 
      </Positioner>


    </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.1rem;
  text-align: left;
  gap: 5%;
`;

const Positioner = styled.div`
  top: 53px;
  height: auto;
  margin-bottom: 1rem;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    font-size: 1rem;
  }
`;
const Header = styled.div`
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  background-color: #ebebeb;
  border-radius: 3px;
  padding: 5px;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border: 1px solid lightgrey;
  border-top: none;
  align-items: center;
`;
const ID = styled.div`
  margin-right: 1.4rem;
  margin-left: 1rem;
`;