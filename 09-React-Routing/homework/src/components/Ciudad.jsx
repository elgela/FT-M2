import React from 'react';

function Ciudad(){
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{Ciudad.name}</h2>
                    <div className="info">
                        <div>Temperatura: {Ciudad.temp} ºC</div>
                        <div>Clima: {Ciudad.weather}</div>
                        <div>Viento: {Ciudad.wind} km/h</div>
                        <div>Cantidad de nubes: {Ciudad.clouds}</div>
                        <div>Latitud: {Ciudad.latitud}º</div>
                        <div>Longitud: {Ciudad.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}

export default Ciudad;