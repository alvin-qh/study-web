import React, {Component} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return <header>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">React Demo</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Introduce
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="intro/hello.html">Hello</DropdownItem>
                                <DropdownItem tag="a" href="intro/process-control.html">Process control</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Component
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="component/basic.html">Basic</DropdownItem>
                                <DropdownItem tag="a" href="component/advance.html">Advance</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                About
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Readme</DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem header>Alvin&copy; Homework</DropdownItem>
                                <DropdownItem>Author</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>;
    }
}