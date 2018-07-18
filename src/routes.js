const sharedPokemon = () => System.import('./components/sharedPokemon/sharedPokemon.vue');
const listPokemon = () => System.import('./components/listPokemon/listPokemon.vue');
const comparePokemon = () => System.import('./components/comparePokemon/ComparePokemon.vue');

export const routes = [
    { path: '', name: 'home', component: listPokemon },
    { path: '/comparar', name: 'comparar', component: comparePokemon },
    { path: '/buscar', name: 'buscar', component: sharedPokemon }
];