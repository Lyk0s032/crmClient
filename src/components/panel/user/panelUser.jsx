import React from 'react';
import WelcomenUser from './add/welcomen';
import NavLeft from './navLeft';
import { useSearchParams } from 'react-router-dom';
import Projects from './add/projects';

export default function PanelUser(){
    const [params, setParams] = useSearchParams();
    return (
        <div className='panelUser'>
            <div className='containerPanel'>
                <div className='navLeft'>
                    <NavLeft />
                </div>
                <div className='containerDataPanel'>
                    <div className='topNav'>
                        <nav>
                            <ul>
                                <li>
                                    <span>Kevin</span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='divPanel'>
                        <div className="containerScroll">
                            {
                                !params.get('d') || params.get('d') == 'welcomen' ?
                                    <WelcomenUser />
                                : params.get('d') == 'projects' ?
                                    <Projects />
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}