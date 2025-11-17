
// Ponto de entrada principal da aplicação

import { setupNavigation } from './router.js';// <-- 1. IMPORTE O NOVO MÓDULO

// Função que inicia a aplicação
function initApp() {
    console.log('App inicializando...');
    setupNavigation(); // Configura o roteador e a navegação
    setupThemeToggle(); // <-- 2. CHAME A FUNÇÃO DO TEMA
}

// Espera o DOM estar pronto para rodar o app
document.addEventListener('DOMContentLoaded', initApp);