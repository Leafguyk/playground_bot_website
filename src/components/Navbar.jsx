import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

        var navs = [];
        for (var i = 0;i < this.props.nav.length;i++){
            navs.push(
            <Nav.Link href={this.props.nav[i]} key={i}>
                {this.props.nav[i]}
            </Nav.Link>)
        }

        return(
            <>
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Gothic+A1:wght@200&display=swap');
                </style>
                <Navbar 
                  style={{ position: "sticky"}}
                  fixed="top"
                  className={[`bg-blend-darken`,`bg-theme-black-2`,`pb-0`]}
                >
                    <div className='ml-2'>
                        <Navbar.Brand href="#home" style={{color: '#F2F2F2', fontSize: '30px',fontFamily: 'Gothic A1'}} className={[`text-xl`]}>
                            <img
                              alt=""
                              src={this.props.imgPath}
                              width="50"
                              height="50"
                              className="d-inline-block align-top"
                            />{' '}
                            {this.props.brand}
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            {navs}
                        </Nav>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default NavBar;