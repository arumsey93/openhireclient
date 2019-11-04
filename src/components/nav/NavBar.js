import React from "react"
import { Link } from "react-router-dom"
import { Menu, Image, Dropdown } from "semantic-ui-react"
import logo from "../../images/logo.png"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import "./NavBar.css"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()
   
    return (
        <Menu size="large">
            <Menu.Item as={Link} to="/">
                <Image src={logo} size="mini" />
            </Menu.Item>
            <Menu.Item as={Link} to="/" header>
                Home
            </Menu.Item>
            <Dropdown item simple text="Profile">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profiles/create">
                        Create Your Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/profile">
                        View Your Profile
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown item simple text="Jobs">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/jobs">
                        Search Jobs
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/jobs/create">
                        Post a Job
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/jobs/yourjobs">
                        View Your Jobs
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as={Link} to="/resources">
                Resources
            </Menu.Item>
            <Menu.Item as={Link} to="/register">
                Register
            </Menu.Item>
            {isAuthenticated() ? (
                <Menu.Item
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
                    <Menu.Item as={Link} to="/login">
                        Login
                    </Menu.Item>
                </>
            )}
        </Menu>
    )
}

export default NavBar