import React from "react"
import { Link } from "react-router-dom"
import { Menu, Image, Dropdown } from "semantic-ui-react"
import logo from "../../images/Open.HIRE no text.png"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./NavBar.css"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()
   
    return (
        <Menu size="large" style={{backgroundColor: '#000000'}}>
            <Menu.Item as={Link} to="/">
                <Image src={logo} size="mini" />
            </Menu.Item>
            <Menu.Item as={Link} to="/" header style={{color: 'white'}}>
                Home
            </Menu.Item>
            <Dropdown item simple text="Profile" style={{color: 'white'}}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profiles/create">
                        Create Your Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profile">
                        View Your Profile
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item simple text="Jobs" style={{color: 'white'}}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/jobs/create">
                        Post a Job
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/jobs/yourjobs">
                        View Your Jobs
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item simple text="Search For" style={{color: 'white'}}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/jobs">
                        Jobs
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profiles">
                        Talent
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as={Link} to="/resources" style={{color: 'white'}}>
                Resources
            </Menu.Item>
            <Menu.Item as={Link} to="/register" style={{color: 'white'}}>
                Register
            </Menu.Item>
            {isAuthenticated() ? (
                <Menu.Item
                    style={{color: 'white'}}
                    className="nav-link fakeLink"
                    onClick={() => {
                        logout()
                        props.history.push({
                            pathname: "/"
                        })
                    }}
                >
                    Logout
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item as={Link} to="/login" style={{color: 'white'}}>
                        Login
                    </Menu.Item>
                </>
            )}
        </Menu>
    )
}

export default NavBar