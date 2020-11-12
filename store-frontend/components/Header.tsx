import React from 'react'
import Nav from './Nav';


const Header = () => {
    return (
        <header>
            <form className="search">
                <input type="text" placeholder="Search.." />
            </form>
            <div className="logo">
                LOGO
            </div>
            <Nav />
        </header>
    )
}


export default Header;