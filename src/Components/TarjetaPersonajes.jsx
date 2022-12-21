import React from 'react'

/** {figura} es la referencia de la iteracion de los personajes del componente ListaPersonajes */
export default function TarjetaPersonajes({figura}) {
    return (
        <div className='col-md-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <b>{figura.name}</b>
                </div>
                <img src={figura.image} alt="" />
                <div className='card-body'>
                    <p>{figura.species}</p>
                    <p>{figura.status}</p>
                    <p>{figura.origin.name}</p>
                    <p>{figura.location.name}</p>
                </div>
            </div>
        </div>
    )
}


