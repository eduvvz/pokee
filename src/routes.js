const sharedPokemon = () => System.import('./components/searchPokemon/SearchPokemon.vue');
const listPokemon = () => System.import('./components/listPokemon/ListPokemon.vue');
const comparePokemon = () => System.import('./components/comparePokemon/ComparePokemon.vue');

export const routes = [
    { path: '/', name: 'home', component: listPokemon, title: 'Home' },
    { path: '/comparar', name: 'compare', component: comparePokemon, title: 'Comparar' },
    { path: '/buscar', name: 'shared', component: sharedPokemon, title: 'Buscar Pokémon' }
];