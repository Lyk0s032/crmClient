import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import NoteProject from './note';
import Avance from './avance';

export default function ModalProject(props){
    const user = props.user;
    const client = props.client;
    const project = props.project;

    const [params, setParams] = useSearchParams();
    return (
        <div className='modalProject'>
            <div className='containerModalProject'>
                <div className='header'>
                    <div className='title'>
                        
                    </div>
                    <button onClick={() => {
                        params.delete('m');
                        setParams(params);
                    }}>
                        <MdOutlineClose className='icon' />
                    </button>
                </div>

                <div className='containerModal'>
                    {
                        params.get('m') == 'note' ?
                            <NoteProject user={user} client={client} project={project} />
                        : params.get('m') == 'avance' ?
                            <Avance  user={user} client={client} project={project} />
                        :null
                    }
                </div>
            </div>
        </div>
    )
}