import React from 'react'
import fondo from '../imagen.jpg';

export default function CardCharacter(props) {
    return (
        <div className='col-md-4'>
            <div className='card mt-4'>
                <div className='card-header'>
                    <b>{props.name}</b>
                </div>
                {/*
                    validando si una imagen no tuviera una ruta en la api
                    props.image != "" ? <img src={props.image} alt="" /> : <img src={fondo} alt="" />
                */}
                <img src={props.image} alt="" />
                <div className='card-body'>
                    <p>{props.species}</p>
                    <p>{props.status}</p>
                    <p>{props.origin.name}</p>
                    <p>{props.location.name}</p>
                </div>
            </div>
        </div>
    )
}
