const sharedPokemon = () => System.import('./components/sharedPokemon/sharedPokemon.vue');
const listPokemon = () => System.import('./components/listPokemon/listPokemon.vue');
const comparePokemon = () => System.import('./components/comparePokemon/ComparePokemon.vue');

export const routes = [
    { path: '/', name: 'home', component: listPokemon, title: 'Home' },
    { path: '/comparar', name: 'compare', component: comparePokemon, title: 'Comparar' },
    { path: '/buscar', name: 'shared', component: sharedPokemon, title: 'Buscar Pokémon' }
];