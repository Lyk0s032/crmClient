import React from 'react';
import { MdBusiness, MdClose, MdDocumentScanner, MdOutlineCall, MdOutlineNotes } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

export default function AnalisisProject(){
    const [params, setParams] = useSearchParams();

    return (
        <div className='analytics'>
            <div className='containerAnalytics'>
                <div className='topMiddle'>
                    <div className='containerMiddleTop'>
                        <div className='close'>
                            <button onClick={() => {
                                params.delete('m');
                                setParams(params);
                            }}>
                                <MdClose className='icon' />
                            </button>
                        </div>
                        <div className='divide'>
                            <div className='left'>
                                <div className="containerLeft">
                                    <div className='topMessage'>
                                        <h1>
                                            Total de interacciones registradas
                                        </h1>
                                    </div>
                                    <div className='data'>
                                        <span>Desde el origen del proyecto</span>
                                        <h1><strong>8</strong> Interacciones</h1>
                                        <span>Registradas hasta el momento</span>
                                    </div>
                                </div>
                            </div>
                            <div className='results'>
                                <div className='resultsContainer'>
                                    <div className='header'>
                                        <h3>Resumen del proyecto</h3>
                                    </div>
                                    <div className='listResults'>
                                        <div className="containerLists">
                                            <div className="item">
                                                <div className="pointItem">
                                                    <MdOutlineCall className='icon' />
                                                    <span>Número de llamadas</span>
                                                </div>
                                                <div className="resultItem">
                                                    <span>2</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="pointItem">
                                                    <MdBusiness className='icon' />
                                                    <span>Número de visitas</span>
                                                </div>
                                                <div className="resultItem">
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="pointItem">
                                                    <MdDocumentScanner className='icon' />
                                                    <span>Número de cotizaciones</span>
                                                </div>
                                                <div className="resultItem">
                                                    <span>0</span>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="pointItem">
                                                    <MdOutlineNotes className='icon' />
                                                    <span>Registro de notas</span>
                                                </div>
                                                <div className="resultItem">
                                                    <span>5</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='asesor'>
                                <div className='boxAsesor'>
                                    <div className='header'>
                                        <h3>Encargado de la relación comercial</h3>
                                    </div>
                                    <div className='asesorDiv'>
                                        <div className='img'>
                                            <img src="" alt="" />
                                        </div>
                                        <div className='resAsesor'>
                                            <h3>Elena Sanchez</h3>
                                            <span>Asesora</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottomMiddle'>
                    <div className='containerBottomMiddle'>
                        <div className='descProject'>
                            <div className='containerDescProject'>
                                <h1>Diseño de oficina </h1>
                                <span>
                                    La empresa, ha adquirido una nueva sede para su equipo administrativo. Esta interesado en obtener consultoría y el diseño de todo el proyecto mobiliario.
                                </span>
                            </div>
                        </div>
                        <div className='stateProject'>
                            <div className='containerState'>
                                <div className='header'>
                                    <h3>Estado de la relación</h3>
                                </div>
                                <div className='resState'>
                                    <div className='item'>
                                        <button>
                                            <span>Proyecto en proceso...</span>
                                        </button>
                                    </div>
                                    <div className="item">
                                        <span>Hace <strong>43 días </strong> Inició este proyecto</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='download'>
                            <div className='containerDownload'>
                                <div className='header'>
                                    <h3>Descargar o Compartir</h3>
                                </div>
                                <div className='btn'>
                                    <button>
                                        <span>Descargar</span>
                                    </button>
                                    <button>
                                        <span>Vinculo</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}