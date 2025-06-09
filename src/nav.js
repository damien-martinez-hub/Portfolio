'use client';
import Nav from 'react-bootstrap/Nav';
import styles from './App.css';
import { NavLink } from 'react-router-dom'
function Nav_bar(){

    return(
<>

<Nav
            variant="nav d-flex flex-row mb-3s"
            className={styles.nav}
          activeKey="/home"
         // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <NavLink to= "/">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to= "/profil">Profil</NavLink>
          </Nav.Item>
          <Nav.Item>
           <NavLink to= "/competences">Compétences</NavLink>
          </Nav.Item>
          <Nav.Item>
             <NavLink to= "/exp_pro">Experiences pro</NavLink>
          </Nav.Item>
          <Nav.Item>
           
            <NavLink to= "/profil2">ChatBot</NavLink>
           
          </Nav.Item>
        </Nav>
</>
    )
}

export default Nav_bar;