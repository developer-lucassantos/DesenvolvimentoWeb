// js/templates.js
// Este é o seu "sistema de modelos JavaScript"
// O conteúdo de cada página HTML antiga foi movido para cá.

// ======================================================
// 1. Template da Página Inicial (do index.html)
// ======================================================
export function templateInicio() {
    return `
        <section class="produto-card">
            <h2 class="h2" tabindex="-1">Quem somos</h2>
            <p class="paragrafo-quemsomos">
                <span class="tag tag-info">Organização Não Governamental</span>
                Somos uma organização não governamental dedicada a promover a inclusão social, cidadania e qualidade de
                vida por meio do esporte e da educação.
                Acreditamos que o esporte é uma poderosa ferramenta de
                transformação, capaz de inspirar valores como respeito, disciplina, solidariedade e trabalho em equipe.
            </p>
            <div class="foto-voluntatios">
                <picture class="col-span-6">
                    <source srcset="imagens/voluntarios.webp" type="image/webp">
                    <img src="imagens/voluntarios.jpeg"  alt="imagem de pessoas ligadas à ONG" width="500" height="400"
                        class="foto">
                </picture>
                <picture class="col-span-6">
                    <source srcset="imagens/projeto.webp" type="image/webp">
                    <img src="imagens/projeto.webp" alt="imagem de pessoas ligadas à ONG" width="500" height="400"
                        class="foto">
                </picture>
            </div>
        </section>

        <section class="produto-card2">
            <h2>Nossa Missão</h2>
            <p>
                Nossa Missão é afastar jovens de atos criminosos reeducando-os atráves do Esporte e oficinas que visam
                resgatar jovens desorientados e sem plano familiar, conciêntizando-os do que é certo e errado muitas
                vezes até mesmo dando uma nova perspectiva de futuro através de novas profissões.
            </p>
            <div class="icones">
                <span class="badge badge-danger">Drogas</span>
                <span class="badge badge-danger">Álcool</span>
                <span class="badge badge-danger">Fumo</span>
                <img src="imagens/alcool.png" alt="imagem simbolica" class="icons d-none-lg">
                <img src="imagens/smoke.png" alt="imagem simbolica" class="icons d-none-lg">
                <img src="imagens/drugs.png" alt="imagem simbolica" class="icons d-none-lg">
            </div>
            
            <div class="alert alert-success mt-lg">
                <p>Junte-se a nós! Clique em <a href="#cadastro" class="alert-link" data-page="cadastro">Cadastro</a> para saber mais.</p>
            </div>
        </section>

        <section class="produto-card3">
            <h2>Contato</h2>
            <address>
                <p>Endereço: Rua Passagem Bingo, 123 - Bairro Bela Vista - São Paulo/SP</p>
                <p>Telefone: (11)00000-0000</p>
                <p>Email: contato@contato.com </p>
            </address>
        </section>
    `;
}

// ======================================================
// 2. Template da Página de Doação (do donate.html)
// ======================================================
export function templateDoacao() {
    return `
        <section class="produto-card">
            <h2 tabindex="-1">A sua doação transforma vidas</h2>
            <p>
                Cada contribuição, grande ou pequena, é fundamental para manter nossos projetos de inclusão social, esporte e educação ativos.<br>
                Com o seu apoio, podemos oferecer materiais esportivos, alimentação e bolsas de estudo para jovens em situação de vulnerabilidade.
            </p>
            <div class="alert alert-success mt-lg">
                <p>Nossa meta de arrecadação este mês é de R$ 5.000,00! Ajude-nos a alcançá-la.</p>
            </div>
        </section>

        <section class="produto-card">
            <h2>Escolha a melhor forma de doar</h2>
            
            <div class="grid-12-col mt-lg">
                
                <div class="col-span-12 col-span-md-6 col-span-lg-4">
                    <div class="produto-card">
                        <h3 class="tag tag-primary"><i class="fas fa-qrcode"></i> Doação PIX</h3>
                        <p>A forma mais rápida e segura de apoiar. Sua doação entra na hora!</p>
                        <p class="mt-md"><strong>Chave PIX (E-mail):</strong> contato@contato.com</p>
                        <p>Ou escaneie o QR Code:</p>
                        <img src="imagens/placeholder_qrcode.png" alt="QR Code PIX" class="foto" width="200" height="200">
                        <button class="botao mt-md">Copiar Chave PIX</button>
                    </div>
                </div>

                <div class="col-span-12 col-span-md-6 col-span-lg-4">
                    <div class="produto-card">
                        <h3 class="tag tag-secondary"><i class="fas fa-university"></i> Transferência Bancária</h3>
                        <p>Para doações de maior valor ou doações recorrentes.</p>
                        <ul class="mt-md">
                            <li><strong>Banco:</strong> 001 - Banco do Brasil (Exemplo)</li>
                            <li><strong>Agência:</strong> 0000-0</li>
                            <li><strong>Conta Corrente:</strong> 99999-9</li>
                            <li><strong>CNPJ:</strong> 00.000.000/0001-00</li>
                        </ul>
                        <button class="botao botao-secondary mt-md">Ver Detalhes Completos</button>
                    </div>
                </div>

                <div class="col-span-12 col-span-lg-4">
                    <div class="produto-card">
                        <h3 class="tag tag-info"><i class="fas fa-credit-card"></i> Doação por Cartão</h3>
                        <p>Use seu cartão de crédito ou boleto através da nossa plataforma parceira.</p>
                        <p class="mt-md">Você pode optar por uma doação única ou mensal.</p>
                        
                        <div class="form-actions" style="display: block;">
                            <button class="botao mt-md" style="width: 100%;">Doar R$ 25,00 (Mensal)</button>
                            <button class="botao mt-sm" style="width: 100%;">Doar R$ 50,00 (Única)</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// ======================================================
// 3. Template da Página de Voluntário (do voluntario.html)
// ======================================================
export function templateVoluntario() {
    return `
        <section class="produto-card">
            <h2 tabindex="-1">Mude Vidas, Seja um Voluntário!</h2>
            <p>
                O voluntariado é o coração da nossa ONG. Se você tem tempo, talento e paixão por causas sociais, venha fazer parte da nossa equipe. 
                Juntos, podemos criar um futuro melhor para os jovens da comunidade.
            </p>
            <div class="alert alert-info mt-lg">
                <p>O primeiro passo é preencher o <a href="#cadastro" class="alert-link" data-page="cadastro">formulário de cadastro</a> e indicar seu interesse em ser voluntário.</p>
            </div>
        </section>

        <section class="produto-card">
            <h2>Áreas de Atuação</h2>
            <p>Oferecemos diverseas oportunidades, independentemente da sua experiência:</p>
            
            <div class="grid-12-col mt-md">
                
                <div class="col-span-12 col-span-md-6 col-span-lg-4">
                    <div class="produto-card">
                        <h3 class="tag tag-primary"><i class="fas fa-futbol"></i> Esportes e Lazer</h3>
                        <p>Auxílio nas aulas de futebol, organização de jogos e atividades recreativas.</p>
                        <span class="badge badge-primary">Futebol</span>
                        <span class="badge badge-primary">Recreação</span>
                    </div>
                </div>

                <div class="col-span-12 col-span-md-6 col-span-lg-4">
                    <div class="produto-card">
                        <h3 class="tag tag-secondary"><i class="fas fa-book-open"></i> Educação e Oficinas</h3>
                        <p>Reforço escolar (Matemática, Português) e condução de oficinas de arte/cultura.</p>
                        <span class="badge badge-secondary">Reforço Escolar</span>
                        <span class="badge badge-secondary">Artesanato</span>
                    </div>
                </div>

                <div class="col-span-12 col-span-md-6 col-span-lg-4">
                    <div class="produto-card">
                        <h3 class="tag tag-success"><i class="fas fa-bullhorn"></i> Administrativo e Marketing</h3>
                        <p>Ajuda na captação de recursos, gestão de redes sociais e organização de eventos.</p>
                        <span class="badge badge-success">Redes Sociais</span>
                        <span class="badge badge-success">Captação</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="produto-card">
            <h2>Requisitos Básicos</h2>
            
            <div class="grid-12-col">
                <div class="col-span-12 col-span-lg-6">
                    <ul>
                        <li><i class="fas fa-check-circle" style="color: var(--color-success);"></i> Ter idade mínima de 18 anos.</li>
                        <li><i class="fas fa-check-circle" style="color: var(--color-success);"></i> Disponibilidade de no mínimo 4 horas semanais.</li>
                        <li><i class="fas fa-check-circle" style="color: var(--color-success);"></i> Compromisso com os valores da ONG.</li>
                    </ul>
                </div>
                <div class="col-span-12 col-span-lg-6">
                    <ul>
                        <li><i class="fas fa-exclamation-triangle" style="color: var(--color-accent);"></i> É necessário apresentar atestado de antecedentes criminais.</li>
                        <li><i class="fas fa-exclamation-triangle" style="color: var(--color-accent);"></i> Participar de uma entrevista de acolhimento.</li>
                    </ul>
                </div>
            </div>

            <a href="#cadastro" class="botao mt-lg" data-page="cadastro">Quero me Cadastrar como Voluntário</a>
            <a href="#projeto" class="botao botao-secondary mt-lg" data-page="projeto">Conhecer Mais Projetos</a>
        </section>
    `;
}

// ======================================================
// 4. Template da Página de Projeto (do projeto.html)
// ======================================================
export function templateProjeto() {
    return `
        <div class="grid-12-col"> 

            <section class="produto-card col-span-12 col-span-md-6 col-span-lg-4">
                <h2 tabindex="-1">Projetos em Andamento</h2>
                <p>
                <span class="tag tag-primary">Esporte</span>
                <span class="tag tag-secondary">Educação</span>
                <span class="tag tag-success">Inclusão</span>
                <br><br>
                Estamos atualmente desenvolvendo vários projetos focados em inclusão social por meio do esporte e da
                educação. Nossos programas incluem aulas de futebol para crianças e adolescentes, oficinas de arte e cultura,
                além de atividades de reforço escolar.
                </p>
                <picture>
                <img src="imagens/projeto.png" alt="Crianças jogando futebol" width="500" height="400" class="foto">
                </picture>
                <button class="botao mt-md">Ver Detalhes</button>
            </section>

            <section class="produto-card col-span-12 col-span-md-6 col-span-lg-4">
                <h2>Como Participar</h2>
                <p>
                Se você deseja se envolver com nossos projetos, seja como voluntário ou participante, entre em contato
                conosco através do formulário de cadastro na página
                <a href="#cadastro" data-page="cadastro">Cadastro</a>.
                </p>
                <p>
                Ou colabore com nosso projeto, fazendo uma <a href="#doacao" data-page="doacao">doação</a>.
                </p>
                <button class="botao botao-secondary mt-md">Seja Voluntário</button>
            </section>

            <section class="produto-card col-span-12 col-span-lg-4">
                <h2>Contato</h2>
                <address>
                <p>Endereço: Rua Passagem Bingo, 123 - Bairro Bela Vista - São Paulo/SP</p>
                <p>Telefone: (11) 00000-0000</p>
                <p>E-mail: <a href="mailto:contato@contato.com">contato@contato.com</a></p>
                </address>
                <button class="botao" disabled>Enviar Mensagem (Indisponível)</button>
            </section>
        </div>
    `;
}

// ======================================================
// 5. Template da Página de Cadastro (do cadastro.html)
// ======================================================
export function templateCadastro() {
    return `
        <div class="produto-card">
            <h2 tabindex="-1">Cadastro de Voluntário/Participante</h2><br>
            <p>Por favor, preencha o formulário abaixo para se cadastrar em nossa ONG. Todos os campos são obrigatórios.</p><br>
            
            <div class="alert alert-info mb-lg">
                <p>Seus dados serão tratados com total privacidade, de acordo com nossa <a href="politicaprivacidade.html" class="alert-link">Política de Privacidade</a>.</p>
            </div>

            <form action="#" method="post" class="formulario" id="form-cadastro" novalidate>
                <fieldset class="grid-12-col">
                    <legend>Dados Pessoais</legend>
                    
                    <div class="col-span-12 col-span-md-6 col-span-lg-4">
                        <label for="nome">Nome:</label>
                        <input type="text" class="campo" id="nome" name="nome" placeholder="Seu nome completo" required minlength="3">
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-4">
                        <label for="email">Email:</label>
                        <input type="email" id="email" class="campo" name="email" placeholder="exemplo@provedor.com" required>
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-4">
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" name="cpf" class="campo" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                            placeholder="000.000.000-00" title="Formato: 000.000.000-00" required>
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-4">
                        <label for="telefone">Telefone:</label>
                        <input type="tel" class="campo" id="telefone" name="telefone"
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}" placeholder="(xx) xxxxx-xxxx"
                            title="Formato: (00) 00000-0000">
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-4">
                        <label for="nascimento">Data de Nascimento:</label>
                        <input type="date" id="nascimento" class="campo" name="nascimento" required>
                    </div>
                </fieldset>
                
                <fieldset class="grid-12-col">
                    <legend>Endereço</legend>

                    <div class="col-span-12 col-span-lg-6">
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" placeholder="Rua, Avenida, etc." required
                            class="campo">
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-3">
                        <label for="cep">CEP:</label>
                        <input type="text" id="cep" name="cep" pattern="[0-9]{5}-[0-9]{3}" placeholder="00000-000"
                            title="Formato: 00000-000" class="campo" required>
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-3">
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" placeholder="Sua cidade" required
                            class="campo">
                    </div>

                    <div class="col-span-12 col-span-md-6 col-span-lg-3">
                        <label for="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" placeholder="Seu estado" required
                            class="campo">
                    </div>
                </fieldset>
                
                <div class="form-actions">
                    <input type="submit" value="Enviar Cadastro" class="botao">
                    <button type="reset" class="botao botao-secondary">Limpar Formulário</button>
                </div>
            </form>
        </div>
    `;
}