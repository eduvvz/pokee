export default class PokemonService {

    constructor (resource) {
        this._resource = resource('https://pokeapi.co/api/v2/pokemon');
    }

    listar() {
        return this._resource
         .query()
         .then(
            res => res.json(), 
            er => {
                throw new Error('Não foi possível capturar o pokemon');
                console.log(er);
            }
         );
    }
}