import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const toggleNav = () => {
        setToggleMenu((e) => !e)
    }



    return (
        <div className={toggleMenu ? 'navbar expanded' : 'navbar'}>
            <h1 className='logo'></h1>

            <ul>
                <li>Falcon 9</li>
                <li>Falcon Heavy</li>
                <li>Dragon</li>
                <li>Updates</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Shop</li>
            </ul>

            <div className="toggle-icon" onClick={toggleNav}>
                {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
            </div>

        </div>
    );
};

export default Navbar;