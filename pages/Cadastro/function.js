
//essa função irá dividir o número de telefone em 3 grupos cada um com um certo numero de digitos
//depois ele organiza os grupos colocando sinais entre eles
export function addMascara(valor){
    return  valor.replace(/^(\d{2})(\d{5})(\d)/g,'($1)$2-$3');
}

