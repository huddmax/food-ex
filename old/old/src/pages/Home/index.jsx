import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header/index.jsx';

import { Input } from '../../components/Input/index.jsx';

import { ButtonText } from '../../components/ButtonText/index.jsx';

import { Link } from 'react-router-dom';

export function Home() {
 

    return (
        <Container>

            <Header>


            </Header>
            
            <Brand>
                <h2>Sabores inigualáveis</h2>
                <span>Sabores inigualáveis</span>
            </Brand>

            <Menu>
                {/* <li><ButtonText
                    title="Todos"
                    onClick = {() => handleTagSelected("all")}
                    isactive={tagsSelected.length == 0}
                    />
                </li> */}

                {/* {
                    tags && tags.map(tag =>(
                        <li
                        key = {String(tag.id)}
                        >
                        <ButtonText
                                title={tag.name}
                                onClick = {() => handleTagSelected(tag.name)}
                                isactive = { tagsSelected.includes(tag.name)}
                        />
                        </li>
                    ))
                } */}
           
                
            </Menu>

            <Search>
                
                <Input
                    placeholder="Pesquisar pelo título"
                    // icon={FiSearch}
                    onChange = { (e) => setSearch(e.target.value) }
                />
            </Search>
                           

            <Content>


    

            </Content>

            <NewNote>
                <Link to= "/New">
                    <FiPlus />
                    Criar Nota

                </Link>
            </NewNote>

            

        </Container>

    );
}