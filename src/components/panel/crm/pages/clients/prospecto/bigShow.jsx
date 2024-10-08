import React from 'react';
import { MdClose } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

export default function BigShow(){
    const [params, setParams] = useSearchParams();
    return (
        <div className='bigShow'>
            <div className='close'>
                <div className='business'>
                    <h3>Costa Center</h3>
                </div>
                <button onClick={() => {
                    params.delete('move');
                    setParams(params);
                }}>
                    <MdClose className='icon' />
                </button>
            </div>
            <div className='containerBigShow'>
                <div className='leftBig'>
                    <div className='containerLeft'>
                        <div className='nav'>
                            <nav>
                                <ul>
                                    <li>
                                        <div>
                                            <span>Datos</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <span>Crear origen de prospectos</span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>       
                </div>
                <div className='containerRight'>
                    <h1>Right</h1>
                    <span>Right</span>
                </div>
            </div>
        </div>
    )
}