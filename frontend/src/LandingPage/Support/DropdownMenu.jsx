import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu({ title, links, icon }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisiblity = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className='container mt-4 ml-5'>
            <button className='dropdown-box' onClick={toggleVisiblity}>
                <div className='icon'>{icon}</div>
                <div style={{width : "100%", display : "flex", justifyContent : "space-between" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>{title}</div>
                    <div style={{paddingRight : "1rem", color : "#397DD0"}}><i class="fa-solid fa-chevron-down"></i></div>
                </div>
            </button>

            {isVisible &&
                <div>
                    <ul className='options'>
                        {links.map((link, index) => {
                            return <li className='options-link' key={index}>{link}</li>
                        })}
                    </ul>
                </div>}
        </div>
    );
}

export default DropdownMenu;