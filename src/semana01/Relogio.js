// import './Relogio.css'

import React, { useState, useEffect } from 'react';

function Relogio() {
    <h1>Relógio: </h1>
    const [hora, setHora] = useState('');

    useEffect(() => {
        const atualizarHora = () => {
            const dataAtual = new Date();
            const hora = dataAtual.getHours().toString().padStart(2, '0');
            const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
            const segundo = dataAtual.getSeconds().toString().padStart(2, '0');

            setHora(`${hora}:${minuto}:${segundo}`);
        };

        const timer = setTimeout(atualizarHora, 1000);

        return () => clearTimeout(timer);
    }, [hora]);

    return <div id="hora">{hora}</div>;
}

export default Relogio;
