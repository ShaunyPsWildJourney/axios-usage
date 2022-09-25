import styled from 'styled-components';
import ButtonWrapper from './ButtonWrapper';
import axios from 'axios'
import {useState , useRef, useEffect  } from 'react'; 
import AxiosReply from './AxiosReply';
import NavBar from './NavBar';
import IDSearch from './Inputs/IDSearch';
import NewTodo from './Inputs/NewTodo';
import Delete from './Inputs/Delete';
import Patch from './Inputs/Patch';
import Loading from './Loading';
import Blocker from './Blocker';
import { useWindowWidth } from '@react-hook/window-size';

interface Thing {
  completed:boolean;
  id:number;
  title:string;
  userId:number;
}

export default function App() {
  const onlyWidth = useWindowWidth();
  const [ posts, setPosts ] = useState<Thing[]>([]);
  const [ headers, setHeaders ] = useState<any>('');
  const [ config, setConfig ] = useState<any>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ loadID , setLoadID ] = useState<boolean>(false);
  const [ loadNew , setLoadNew ] = useState<boolean>(false);
  const [ deleting, setDeleting ] = useState<boolean>(false);
  const [ patching, setPatching ] = useState<boolean>(false);

  //TRACK INPUTS
  const paramRef = useRef<HTMLInputElement>(null)
  const postRef = useRef<HTMLInputElement>(null);
  const deleteRef = useRef<HTMLInputElement>(null);
  const patchIDRef = useRef<HTMLInputElement>(null);
  const patchRef = useRef<HTMLInputElement>(null);
  let inputOne: string = ''; 
  let inputTwo: string = ''; 
  let inputThree: string = '';
  let inputFour: string = ''; 
  let inputFive: string = ''; 
  function trackInput() {
    if (paramRef.current) {
      inputOne = paramRef.current.value }
    if (postRef.current) {
      inputTwo = postRef.current.value}
    if (deleteRef.current) {
      inputThree = deleteRef.current.value}
    if (patchRef.current) {
      inputFour = patchRef.current.value}
    if (patchIDRef.current) {
      inputFive = patchIDRef.current.value}
  }

// CRUD FUNCTIONS 
  async function handleGET() {
    setIsLoading(true)
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10',)
      const data = await response.data; 
      setPosts(data)
      handleStateSetting(response)
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGetParam() {
    resetBooleans()
    setLoadID(true)
    setPosts([])
    if (parseInt(inputOne) > 200 || parseInt(inputOne) < 1) {
      alert('Please enter a number from 1 to 200')
    }
    if (inputOne) {
      try {
        setIsLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10', {
          params: {
            id: inputOne
          }
        })
        const data = await response.data; 
        setPosts(data)
        handleStateSetting(response)
      } catch (e) {
        console.log(e)
      } finally {
        setLoadID(false)
        setIsLoading(false)
      }
    }
  }

  async function handlePOST() {
    resetBooleans()
    setLoadNew(true)
    if (inputTwo ) {
      try {
        setIsLoading(true)
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
          userId: '1', 
          title: inputTwo,
          completed: false
        })
        const data = await response.data; 
        setPosts([data])
        handleStateSetting(response)
      } catch (e) {
        console.log(e)
      } finally {
        setLoadNew(false)
        setIsLoading(false)
      }
    }
  }

  async function handlePatch() {
    resetBooleans()
    setPatching(true);
    if (inputFour) {
      try {
        setIsLoading(true)
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${inputFive}`, {
          title: inputFour,
          completed: true
        })
      const data = await response.data;
      setPosts([data])
      handleStateSetting(response)
      } catch (e) {
        console.log(e)
      } finally {
        setPatching(false)
        setIsLoading(false)
      }
    }
  }

  async function handleDelete() {
    resetBooleans()
    setDeleting(true)
    if (inputThree) {
      try {
        setIsLoading(true)
        const response = await axios.delete( `https://jsonplaceholder.typicode.com/todos/${inputThree}`,)
        const data = await response.data;
        setPosts([data])
        handleStateSetting(response)
      } catch (e) {
        console.log(e)
      } finally {
        setDeleting(false)
        setIsLoading(false)
      }
    }
  }

    // TIDIES UP FUNCTIONS 
function handleStateSetting(response: any) {
    let headerString = []; 
    let configString = [];
    headerString = JSON.stringify(response.headers).split(',');
    setHeaders(headerString)
    configString = JSON.stringify(response.config).split(',');
    setConfig(configString)
  }
  // RESET BOOLEANS
  function resetBooleans() {
    setPatching(false)
    setDeleting(false)
    setLoadNew(false)
    setLoadID(false)
  }

  // INPUT FOCUSING
  useEffect(() => {
    if (postRef.current) {
      postRef.current.focus(); 
    }
    if (paramRef.current) {
      paramRef.current.focus();
    }
    if (deleteRef.current) {
      deleteRef.current.focus()
    }
    if (patchIDRef.current) {
      patchIDRef.current.focus()
    }
  }, [loadNew, loadID, deleting, patching, postRef,paramRef, deleteRef, patchIDRef])

  // CLOSE POP UP WITH ESC
  useEffect(() => {
    function keyDown(event: any) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setLoadID(false)
        setLoadNew(false)
        setDeleting(false)
        setPatching(false)
      }
      if (event.key === 'Enter') {
        // event.preventDefault();
        if (loadID) { handleGetParam()} 
        if (loadNew) {handlePOST()}
        if (deleting) {handleDelete()}
        if (patching) {handlePatch()}
      }
    }
    document.addEventListener('keydown', keyDown);
    return () => {document.removeEventListener('keydown', keyDown);}
    // eslint-disable-next-line 
  }, [loadID, loadNew, deleting, patching])

  function cancelPost() {
    setLoadNew(false)
    setDeleting(false)
    setLoadID(false)
    setPatching(false)
  }



  return (
    <Wrapper>
      { onlyWidth < 700 &&
      <Blocker />}
      {isLoading && 
      <Loading />}

      <NavBar />
      <ButtonWrapper 
        handleGET={handleGET}
        handleGetParam={handleGetParam}
        handlePOST={handlePOST}
        handleDelete={handleDelete}
        handlePatch={handlePatch}
  
      />

      {loadID &&
        <Popups>
          <IDSearch 
            paramRef={paramRef} 
            trackInput={trackInput}
          />
          <PopupButton onClick={handleGetParam} disabled={!loadID}>Enter ID number</PopupButton>            
          <PopupButton onClick={cancelPost}> Cancel</PopupButton>            
        </Popups>
      }  
      {loadNew &&
        <Popups>
          <NewTodo 
            postRef={postRef}  
            trackInput={trackInput}
            />
          <PopupButton onClick={handlePOST} >Enter new Todo</PopupButton>            
          <PopupButton onClick={cancelPost}> Cancel</PopupButton>            
        </Popups>
      }
      {patching && 
        <Popups>
          <Patch 
            patchRef={patchRef}  
            patchIDRef={patchIDRef}
            trackInput={trackInput}
            />
          <PopupButton onClick={handlePatch} >Put/Patch</PopupButton>            
          <PopupButton onClick={cancelPost}> Cancel</PopupButton>            
        </Popups>
      }
      {deleting && 
        <Popups>
          <Delete 
            deleteRef={deleteRef}  
            trackInput={trackInput}
            />
          <PopupButton onClick={handleDelete} >Delete a Todo</PopupButton>            
          <PopupButton onClick={cancelPost}> Cancel</PopupButton>            
        </Popups>
      }


      <AxiosReply 
        posts={posts}
        headers={headers}
        config={config}
      />
   
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Popups = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  padding: 1rem;
  border-radius: 10px;
  background-color: white;
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border: 10px solid lightgrey;
`;
const PopupButton = styled.button`
  margin-top: 2rem;
  width: 130px;
  height: 60px;
  font-size: 1.4rem;
  background-color: #ececec;
  border-radius: 3px;
  border: none;
  transition: all 0.2s;
  &:hover {
    background-color: orange;
    cursor: pointer;
  }
  &:active {
    box-shadow: inset 6px 6px 3px darkgrey; 
  }
`