// js/theme.js

// Função principal do 'theme.js'
export function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = toggleButton.querySelector('i'); // Pega o ícone

    // Função para aplicar o tema (dark/light)
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            toggleIcon.className = 'fas fa-sun'; // Muda o ícone para Sol
            toggleButton.setAttribute('aria-label', 'Alternar para modo claro');
        } else {
            body.removeAttribute('data-theme');
            toggleIcon.className = 'fas fa-moon'; // Muda o ícone para Lua
            toggleButton.setAttribute('aria-label', 'Alternar para modo escuro');
        }
    };

    // Verifica se já existe um tema salvo no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme); // Aplica o tema salvo
    }

    // Adiciona o 'click listener' ao botão
    toggleButton.addEventListener('click', () => {
        // Verifica qual é o tema ATUAL e inverte
        let newTheme = 'light'; // Padrão
        if (body.getAttribute('data-theme') !== 'dark') {
            newTheme = 'dark';
        }

        // Aplica o novo tema
        applyTheme(newTheme);

        // Salva a preferência no localStorage
        localStorage.setItem('theme', newTheme);
    });
}