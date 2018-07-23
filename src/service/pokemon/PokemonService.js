export default class PokemonService {

    constructor (resource) {
        this._resource = resource('https://pokeapi.co/api/v2/pokemon{/name}/?limit={limit}');
    }

    list(limitParam) {
        return this._resource
         .get({limit: limitParam})
         .then(
            res => res.json(), 
            er => {
                throw new Error('Não foi possível capturar o pokemon');
                console.log(er);
            }
         );
    }

    listForName(nameParam) {
        return this._resource
         .get({name: nameParam, limit: 1})
         .then(
             res => res.json(),
             er => {
                throw new Error('Não foi possível capturar o pokemon');
                console.log(er);
             }
         )
    }
}