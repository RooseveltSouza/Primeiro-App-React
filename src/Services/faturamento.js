import {URL_API} from './base';

export function consultarFaturamento(){
    return fetch(`${URL_API}/Faturamento`).then(resultado => resultado.json());
}