// js/app.js
// Ponto de entrada principal da aplicação

import { setupNavigation } from './router.js';

// Função que inicia a aplicação
function initApp() {
    console.log('App inicializando...');
    setupNavigation(); // Configura o roteador e a navegação
}

// Espera o DOM estar pronto para rodar o app
document.addEventListener('DOMContentLoaded', initApp);