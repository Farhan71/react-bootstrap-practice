import React from 'react';
import { Nav } from 'react-bootstrap'

const Header = () => {
    return (

        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  href="/review">Review</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  href="/aboutUs">About Us</Nav.Link>
            </Nav.Item>
        </Nav>

    );
};

export default Header;