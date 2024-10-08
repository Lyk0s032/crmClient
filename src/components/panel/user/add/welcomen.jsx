import React from 'react';

export default function WelcomenUser(){
    return (
        <div className='welcomenUser'>
            <div className="containerWelcomen">
                <div className='bigName'>
                    <div className='containerBigName'>
                        <h1>Bienvenido, Kevin</h1>
                        <h3>¡Administra toda tu actividad comercial desde nuestro panel!</h3>
                        <button>
                            <span>Más información</span>
                        </button>
                    </div>
                </div>
                <div className="divBoxHorizontal">
                    <div className='containerBoxHorizontal'>
                        <div className='smallBox'>
                            <div className='topSmallBox'>
                                <h1>Acceder a mis proyectos</h1>
                                <span>Administra todo el comportamiento de tus proyectos y los de tus compañeros</span>
                            </div>
                            <div className='smallInformation'>
                                <button>
                                    <span>Visitar panel</span>
                                </button>
                            </div>
                        </div>

                        <div className='smallBox'>
                            <div className='topSmallBox'>
                                <h1>Centro de creacion</h1>
                                <span>¿Tienes una empresa o estas comenzando una startup? Comienza a agilar toda tu parte comercial.</span>
                            </div>
                            <div className='smallInformation'>
                                <button>
                                    <span>Nueva empresa</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='largeDivContainer'>
                    <div className='containerDivLarge'>
                        <div className='top'>
                            <div className="header">
                                <h1>¿Deseas participar en un nuevo proyecto?</h1>
                            </div>
                            <div className='information'>
                                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio commodi natus ullam sit facere obcaecati eveniet vitae, nisi architecto, sint omnis asperiores consectetur quo officia aperiam expedita recusandae illum alias?</span>
                            </div>
                        </div>
                        <div className='bottomBoxLarge'>
                            <button>
                                <span>¡Buscar startup!</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}