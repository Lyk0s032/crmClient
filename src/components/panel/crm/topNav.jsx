import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineHelpOutline, MdOutlineNotifications } from 'react-icons/md';

export default function TopNav(props){
    const user = props.user;
    return (
        <div className='topNavCRM'>
            <div className='containerTopNav'>
                <nav>
                    <ul>
                        <li className='btn-resources'>
                            <button>
                                <AiOutlinePlus className='icon' />
                                <span>Recursos</span>
                            </button>
                        </li>
                        <li>
                            <div className='div Help'>
                                <MdOutlineHelpOutline className='icon' />
                            </div>
                        </li>
                        <li>
                            <div className='div'>
                                <MdOutlineNotifications className='icon' />
                            </div>
                        </li>
                        <li>
                            <div className='div'>
                                <div className='name'>
                                    <h3>{user.nick}</h3>
                                    <span>{user.range}</span>
                                </div>
                                <div className='photo'>
                                    <h1>{user.nick.split('')[0]}</h1>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}