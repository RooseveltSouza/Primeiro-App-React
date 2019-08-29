import {URL_API} from './base';

export function consultarConsultas(){
    return fetch(`${URL_API}/Consultas`).then(resultado => resultado.json());
}