# Projeto Site ONG (Desenvolvimento Web - SPA)

Este projeto é um site institucional para uma ONG fictícia, focado em inclusão social através do esporte e educação. O projeto foi desenvolvido como parte da avaliação de Desenvolvimento Web, demonstrando conceitos de HTML semântico, CSS modular com BEM/SMACSS, e JavaScript avançado para criar uma **Single Page Application (SPA)**.

## 🚀 Status do Projeto

**Em Desenvolvimento / Concluído**
(Selecione o status atual do seu projeto)

## ✨ Funcionalidades Principais

* **Arquitetura SPA:** Navegação dinâmica sem recarregamento de página, gerenciada por um roteador JavaScript.
* **Templates JS:** O conteúdo de todas as páginas é renderizado dinamicamente a partir de *template strings* de JavaScript.
* **Validação de Formulário:** Verificação de consistência de dados no formulário de cadastro, implementada com JavaScript (sem bibliotecas).
* **Design Responsivo:** Layout adaptável para mobile, tablet e desktop usando CSS Grid e Flexbox.
* **Acessibilidade (Em Implementação):** Foco em semântica, navegação por teclado e contraste de cores (WCAG 2.1).

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica.
* **CSS3:** Estilização modular (BEM/SMACSS), CSS Grid, Flexbox e Variáveis CSS.
* **JavaScript (ES6+):**
    * Manipulação do DOM
    * Arquitetura SPA (Roteador e Templates)
    * Módulos ES6 (`import`/`export`)
    * Validação de formulários

## 📂 Estrutura de Pastas

O projeto segue uma estrutura modular para facilitar a manutenção:
lucasph-dev/desenvolvimentoweb/
├── css/
│   ├── base/
│   ├── components/
│   ├── layout/
│   └── styles.css
├── imagens/
│   └── (suas imagens...)
├── js/
│   ├── app.js         (Arquivo principal que inicializa tudo)
│   ├── router.js      (Seu sistema de SPA - o "roteador")
│   ├── templates.js   (Seu sistema de "modelos JavaScript")
│   └── validation.js  (Seu sistema de validação de formulário)
├── index.html       (Será sua única página "casca" ou "shell")
├── cadastro.html    (Será "morto", o conteúdo dele vai para templates.js)
├── donate.html      (Será "morto", o conteúdo dele vai para templates.js)
├── projeto.html     (Será "morto", o conteúdo dele vai para templates.js)
├── voluntario.html  (Será "morto", o conteúdo dele vai para templates.js)
└── ...
## 📜 Instruções de Instalação e Uso

O projeto é 100% *frontend* e não requer *build* ou dependências.

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Entre na pasta do projeto:
    ```bash
    cd seu-repositorio
    ```
3.  Abra o arquivo `index.html` em seu navegador (recomenda-se usar um servidor local, como a extensão "Live Server" do VS Code).

## 👨‍💻 Autor

* **Lucas Santos** - https://github.com/lucasph-dev

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.