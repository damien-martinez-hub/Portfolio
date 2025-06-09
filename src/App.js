import logo from './logo.svg';
import './App.css';

import BasicExample from './page1';
import Experiences from './exp_pro';
import Nav_bar from './nav';
import Profil from './profil2.tsx';
import Competences from './competences.js';
import Profil_page from "./profil.js";
import Nav from 'react-bootstrap/Nav';
import styles from './App.css';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import {Routes,Route} from 'react-router-dom';

import AppName from '../src/components/AppName.tsx';
import Chat from '../src/components/Chat.tsx';
import Headings from '../src/components/Header.tsx';
import SearchBar from '../src/components/searchBar.tsx';
import Button from '../src/components/Button.tsx';
import Groq from 'groq-sdk';


function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

function App() {
  let count=0;
  const home = () => (
    <BasicExample/>);

    const profil = () => (
    <Profil/>);
      const test=<Greeting name="Taylor" />;
      

    const element = <BasicExample />;
    const handleSearch = () => {
    alert('Search button clicked!');
  };


  return (
    <>
  
        <Nav_bar/>
        <section>
        <Routes>
        <Route path="/" element = {<BasicExample/>}></Route>
        <Route path="/profil" element = {<Profil_page/>}></Route>
        <Route path="/competences" element = {<Competences/>}></Route>
        <Route path="/profil2" element = {<Profil/>}></Route>
        <Route path="/exp_pro" element = {<Experiences/>}></Route>
        </Routes>
        </section>  
         
    </>

  );
}

export default App;
