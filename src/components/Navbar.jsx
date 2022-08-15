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
                <Navbar 
                  style={{backgroundColor: "transparent", position: "sticky"}}
                  fixed="top"
                  className={`bg-blend-darken`}
                >
                    <div className='ml-2'>
                        <Navbar.Brand href="#home" style={{color: '#F2F2F2'}}>
                            <img
                              alt=""
                              src={this.props.imgPath}
                              width="30"
                              height="30"
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