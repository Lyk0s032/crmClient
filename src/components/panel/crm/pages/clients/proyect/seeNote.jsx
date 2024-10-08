import React from 'react';
import { MdNotes, MdOutlineWatchLater } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

export default function SeeNote(){
    const note = useSelector(store => store.note);
    return (
        <div className='seeNote'>
            {
                note ?
                <div className='seeContainer'>
                    <div className='headerNote'>
                        <div className='iconAndSmall'>
                            <MdNotes className='icon' />
                            <span>Detalles de la nota</span>
                        </div>
                        <div className='titleNote'>
                            <h1>
                                {
                                    note.type == 'call' ?
                                        `${note.user.name} Realizó una llamada` 
                                    : note.type == 'go' ?
                                        `${note.user.name} Realizó una visita`
                                    :  note.type == 'note' ? note.titleNote :null 

                                }
                            </h1>

                            <div className='notePlus'>
                                <button className='priority'>
                                    <span>{!note.priority ? 'Normal' : note.priority}</span>
                                </button>
                                <button>
                                    <MdOutlineWatchLater className='icon' />
                                    <span>{note.createdAt.split('T')[0]}</span>
                                </button>
                            </div>
                        </div>

                        <div className='userBox'>
                            <div className='containerUser'>
                                <div className='img'>
                                    <img src="" alt="" />
                                </div>
                                <div className='res'>
                                    <h3>{note.user.name} <strong>Definió:</strong></h3>
                                    <span>Miembro del equipo</span>
                                </div>
                            </div>
                        </div>
                        <div className='noteDescription'>
                            <span>
                                {note.note}

                            </span>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <h1>Selecciona una nota</h1>
                </div>
            }
        </div>
    )
}