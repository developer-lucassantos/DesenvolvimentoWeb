// js/router.js
import { templateInicio, templateDoacao, templateVoluntario, templateProjeto, templateCadastro } from './templates.js';
import { validateForm } from './validation.js'; // Importa o validador

// Onde o conteúdo será injetado
const appRoot = document.getElementById('app-root');

// Mapeamento das "páginas" (hash) para as funções de template
const routes = {
    'inicio': templateInicio,
    'doacao': templateDoacao,
    'voluntario': templateVoluntario,
    'projeto': templateProjeto,
    'cadastro': templateCadastro,
};

// Função de Navegação
export function navigateTo(page) {
    // Encontra a função de template correspondente
    const templateFunction = routes[page];

    if (!templateFunction) {
        // Página não encontrada, volta para o início
        console.error(`Página "${page}" não encontrada.`);
        appRoot.innerHTML = templateInicio(); // Carrega o 'inicio' como padrão
        window.location.hash = '#inicio';
    } else {
        // Encontrou, injeta o HTML no app-root
        appRoot.innerHTML = templateFunction();
    }

    // ======================================================
    // ✨ NOVA ADIÇÃO (Acessibilidade) ✨
    //
    // Após carregar o novo conteúdo, movemos o foco para ele.
    // Procuramos o primeiro elemento com tabindex="-1" (nosso <h2>)
    // dentro do 'appRoot' e o focamos.
    // ======================================================
    const newHeading = appRoot.querySelector('h2[tabindex="-1"]');
    if (newHeading) {
        newHeading.focus();
    }

    // ************* PONTO CRÍTICO *************
    // Se a página renderizada for 'cadastro', nós temos que
    // "ligar" o validador no formulário que ACABOU de ser criado.
    if (page === 'cadastro') {
        const form = document.getElementById('form-cadastro');
        if (form) {
            validateForm(form); // Atacha o validador
        }
    }
}

// Função para configurar os links de navegação
export function setupNavigation() {
    const nav = document.querySelector('.menu-horizontal');
    
    nav.addEventListener('click', (event) => {
        // Verifica se o clique foi em um link com 'data-page'
        const link = event.target.closest('a[data-page]');
        if (link) {
            event.preventDefault(); // Impede a navegação padrão
            const pageName = link.dataset.page;
            window.location.hash = `#${pageName}`; // Atualiza o hash na URL
        }
    });
    
    // Ouve mudanças no HASH (ex: usuário clica 'voltar' no navegador)
    window.addEventListener('hashchange', () => {
        const pageName = window.location.hash.replace('#', '') || 'inicio';
        navigateTo(pageName);
    });

    // Carrega a página inicial ou a página do HASH atual
    const initialPage = window.location.hash.replace('#', '') || 'inicio';
    navigateTo(initialPage);
}