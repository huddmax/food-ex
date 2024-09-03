// import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import { useAuth } from '../../hooks/auth';
// import { api } from '../../services/api.js';


import { Container, Profile, Logout, Search } from './style.js';
import { Input } from '../Input/index.jsx';
import { Button } from '../Button/index.jsx';



export function Header() {
    const { signOut, user } = useAuth();
    
    
    const navigate = useNavigate();
    function navigateToHome() {
        navigate("/");
    }

    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);


    function handleTagSelected(tagName) {
        if (tagName === "all") {
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName);

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        } 

        else {

            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
        
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data)
        }

        fetchTags()

    }, []);
    
    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();

    }, [tagsSelected, search]);


    return (

        <Container>
             
            <Profile onClick={navigateToHome}>
               
                <svg width="43" height="48" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5706 0.216553L42.9737 12.0919V35.8426L21.5706 47.7179L0.167517 35.8426V12.0919L21.5706 0.216553Z" fill="#065E7C"/>
                </svg>
                


                <div>
                    <h2>food explorer</h2>
                    <span>Admin</span>
                </div>
            </Profile>


            <Search>
                
                <Input
                    placeholder="Pesquisar pelo título"
                    icon={FiSearch}
                    onChange = { (e) => setSearch(e.target.value) }
                />
            </Search>


            <Button>

                <p>Pedidos (0)</p>


            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.53906 14C8.53906 13.4477 8.98678 13 9.53906 13H22.5391C23.0913 13 23.5391 13.4477 23.5391 14C23.5391 14.5523 23.0913 15 22.5391 15H9.53906C8.98678 15 8.53906 14.5523 8.53906 14Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.53906 18C8.53906 17.4477 8.98678 17 9.53906 17H22.5391C23.0913 17 23.5391 17.4477 23.5391 18C23.5391 18.5523 23.0913 19 22.5391 19H9.53906C8.98678 19 8.53906 18.5523 8.53906 18Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.62485 6.58579C3.99992 6.21071 4.50863 6 5.03906 6H27.0391C27.5695 6 28.0782 6.21071 28.4533 6.58579C28.8284 6.96086 29.0391 7.46957 29.0391 8V27C29.0391 27.3466 28.8596 27.6684 28.5648 27.8507C28.27 28.0329 27.9018 28.0494 27.5918 27.8944L24.0391 26.118L20.4863 27.8944C20.2047 28.0352 19.8734 28.0352 19.5919 27.8944L16.0391 26.118L12.4863 27.8944C12.2047 28.0352 11.8734 28.0352 11.5918 27.8944L8.03906 26.118L4.48628 27.8944C4.17629 28.0494 3.80815 28.0329 3.51333 27.8507C3.21851 27.6684 3.03906 27.3466 3.03906 27V8C3.03906 7.46957 3.24978 6.96086 3.62485 6.58579ZM27.0391 8L5.03906 8L5.03906 25.382L7.59185 24.1056C7.87338 23.9648 8.20475 23.9648 8.48628 24.1056L12.0391 25.882L15.5918 24.1056C15.8734 23.9648 16.2047 23.9648 16.4863 24.1056L20.0391 25.882L23.5918 24.1056C23.8734 23.9648 24.2047 23.9648 24.4863 24.1056L27.0391 25.382V8Z" fill="white" />
                    
</svg>

            </Button>
                   

            <Logout onClick={() => { navigate("/"), signOut() }}>

                
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2891 11.75L27.5391 17M27.5391 17L22.2891 22.25M27.5391 17H13.5391M13.5391 28H6.53906C6.27385 28 6.01949 27.8946 5.83196 27.7071C5.64442 27.5196 5.53906 27.2652 5.53906 27V7C5.53906 6.73478 5.64442 6.48043 5.83196 6.29289C6.01949 6.10536 6.27385 6 6.53906 6H13.5391" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                
            </Logout>
        </Container>

    );
}