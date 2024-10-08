import React from 'react';
import { BsSend } from 'react-icons/bs';
import { MdMailOutline, MdOutlineNotifications, MdOutlineStarBorderPurple500 } from 'react-icons/md';

export default function Email(){
    return (
        <div className='email'>
            <div className='containerEmail'>
                <div className='leftOptionsEmail'>
                    <div className='containerLeftEmail'>
                        <div className='topMessage'>
                            <button>
                                <span>Nuevo mensaje</span>
                            </button>
                        </div>
                        <div className='optionsNav'>
                            <nav>
                                <ul>
                                    <li>
                                        <div>
                                            <MdMailOutline className="icon" />
                                            <span>Mensajes recibidos</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <BsSend className='icon' />
                                            <span>Enviados</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <MdOutlineStarBorderPurple500 className='icon' />
                                            <span>Favoritos</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </div>
                <div className='rightBoxEmail'>
                        <div className='containerRightBox'>
                            <div className='topInput'>
                                <input type="text" placeholder='Buscar' />
                            </div>
                            <div className='bandejaEntrega'>
                                <div className='containerBandeja'>
                                    <div className='item New'>
                                        <div className='userAndMesa'>
                                            <div className='wallpaper'>
                                                <img src="https://th.bing.com/th/id/OIP.nowHE9NLbnIok1b4Qu5apQHaHg?rs=1&pid=ImgDetMain" alt="" />
                                            </div>
                                            <div className='nameAndMess'>
                                                <h3>Jorge Costa <span>11:26 am</span></h3>
                                                <span>Hey, no te olvides de organizar toda la empresa en función de...</span>
                                            </div>
                                        </div>
                                        <div className='notification'>
                                            <button>
                                                <MdOutlineNotifications className='icon' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='item New'>
                                        <div className='userAndMesa'>
                                            <div className='wallpaper'>
                                                <img src="https://th.bing.com/th/id/OIP.nowHE9NLbnIok1b4Qu5apQHaHg?rs=1&pid=ImgDetMain" alt="" />
                                            </div>
                                            <div className='nameAndMess'>
                                                <h3>Jorge Costa <span>11:26 am</span></h3>
                                                <span>Hey, no te olvides de organizar toda la empresa en función de...</span>
                                            </div>
                                        </div>
                                        <div className='notification'>
                                            <button>
                                                <MdOutlineNotifications className='icon' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='userAndMesa'>
                                            <div className='wallpaper'>
                                                <img src="https://th.bing.com/th/id/OIP.nowHE9NLbnIok1b4Qu5apQHaHg?rs=1&pid=ImgDetMain" alt="" />
                                            </div>
                                            <div className='nameAndMess'>
                                                <h3>Jorge Costa <span>11:26 am</span></h3>
                                                <span>Hey, no te olvides de organizar toda la empresa en función de...</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='item'>
                                        <div className='userAndMesa'>
                                            <div className='wallpaper'>
                                                <img src="https://th.bing.com/th/id/OIP.nowHE9NLbnIok1b4Qu5apQHaHg?rs=1&pid=ImgDetMain" alt="" />
                                            </div>
                                            <div className='nameAndMess'>
                                                <h3>Jorge Costa <span>11:26 am</span></h3>
                                                <span>Hey, no te olvides de organizar toda la empresa en función de...</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className='item'>
                                        <div className='userAndMesa'>
                                            <div className='wallpaper'>
                                            <img src="https://th.bing.com/th/id/OIP.nowHE9NLbnIok1b4Qu5apQHaHg?rs=1&pid=ImgDetMain" alt="" />
                                            </div>
                                            <div className='nameAndMess'>
                                                <h3>Jorge Costa <span>11:26 am</span></h3>
                                                <span>Hey, no te olvides de organizar toda la empresa en función de...</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}