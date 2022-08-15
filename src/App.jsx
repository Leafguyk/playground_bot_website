import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import './index.css';

const navbarStyle = {
    brand: 'Playground',
    imgPath: '/favicon.ico',
    nav: []
}
function App() {
    return (
        <div className='bg-theme-black'>
            <NavBar
            brand = {navbarStyle.brand}
            imgPath = {navbarStyle.imgPath}
            nav = {navbarStyle.nav}
            />
            <h1 style={{color:'#F2F2F2', margin:"0px"}}>
                Playground_Bot
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
                <br></br>1
            </h1>
        </div>
    );
}


export default App;