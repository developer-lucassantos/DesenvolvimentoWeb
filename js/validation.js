

// Função para exibir erros
function showError(field, message) {
    // Vamos criar uma pequena tag de erro
    let error = field.nextElementSibling;
    if (!error || !error.classList.contains('error-message')) {
        error = document.createElement('span');
        error.className = 'error-message'; // Você pode estilizar .error-message no seu CSS
        field.parentNode.insertBefore(error, field.nextSibling);
    }
    error.innerText = message;
    field.style.borderColor = 'var(--color-accent)'; // Usa sua variável CSS
}

// Função para limpar erros
function clearError(field) {
    let error = field.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        error.remove();
    }
    field.style.borderColor = 'var(--color-neutral-medium)'; // Volta ao normal
}

// Função principal de validação
export function validateForm(formElement) {
    // Mapeamento de campos e suas regras
    const fieldsToValidate = {
        '#nome': {
            required: true,
            minLength: 3,
            message: 'O nome deve ter pelo menos 3 caracteres.'
        },
        '#email': {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regex simples de email
            message: 'Por favor, insira um email válido.'
        },
        '#cpf': {
            required: true,
            pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            message: 'O CPF deve estar no formato 000.000.000-00.'
        }
        // Adicione os outros campos: telefone, nascimento, cep, etc.
    };

    formElement.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário!
        
        let isFormValid = true;

        // Limpa erros antigos
        Object.keys(fieldsToValidate).forEach(selector => {
            const field = formElement.querySelector(selector);
            if (field) clearError(field);
        });

        // Itera sobre cada campo para validar
        for (const selector in fieldsToValidate) {
            const rules = fieldsToValidate[selector];
            const field = formElement.querySelector(selector);

            if (!field) continue;

            const value = field.value.trim();

            // 1. Checa 'required'
            if (rules.required && value === '') {
                isFormValid = false;
                showError(field, 'Este campo é obrigatório.');
                continue; // Pula para o próximo campo
            }

            // 2. Checa 'minLength'
            if (rules.minLength && value.length < rules.minLength) {
                isFormValid = false;
                showError(field, rules.message);
                continue;
            }

            // 3. Checa 'pattern' (Regex)
            if (rules.pattern && !rules.pattern.test(value)) {
                isFormValid = false;
                showError(field, rules.message);
                continue;
            }
        }

        // Se tudo estiver OK, envia (ou simula o envio)
        if (isFormValid) {
            console.log('Formulário válido. Enviando...');
            // event.target.submit(); // Descomente para enviar de verdade
            alert('Cadastro enviado com sucesso!');
            formElement.reset(); // Limpa o formulário
        } else {
            console.log('Formulário contém erros.');
        }
    });
}