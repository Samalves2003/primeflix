# 🎬 PrimeFlix - Catálogo de Filmes Moderno
## Meu primeiro projeto com React e Tailwind CSS :D
![PrimeFlix Banner](https://img.shields.io/badge/PrimeFlix-Cinema%20Digital-purple?style=for-the-badge&logo=react)

## 📋 Sobre o Projeto

**PrimeFlix** é uma aplicação web moderna desenvolvida em React que oferece uma experiência cinematográfica completa para os amantes do cinema. O projeto utiliza a poderosa API do **The Movie Database (TMDb)** para fornecer informações atualizadas sobre filmes em cartaz, permitindo aos usuários explorar, descobrir e gerenciar sua lista pessoal de filmes favoritos.

### ✨ Características Principais

- **Interface Moderna**: Design responsivo com gradientes vibrantes e animações suaves
- **Catálogo Atualizado**: Filmes em cartaz obtidos em tempo real da API TMDb
- **Sistema de Favoritos**: Gerenciamento local de filmes favoritos com localStorage
- **Experiência Responsiva**: Otimizado para desktop, tablet e dispositivos móveis
- **Navegação Intuitiva**: Sistema de rotas com React Router DOM
- **Feedback Visual**: Notificações toast para ações do usuário

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca JavaScript para construção de interfaces
- **React Router DOM 7.8.0** - Gerenciamento de rotas e navegação
- **Tailwind CSS 3.4.0** - Framework CSS utilitário para estilização
- **React Toastify 11.0.5** - Sistema de notificações elegante

### API e Dados
- **Axios 1.11.0** - Cliente HTTP para requisições à API
- **The Movie Database (TMDb) API** - Fonte de dados de filmes

### Ferramentas de Desenvolvimento
- **React Scripts 5.0.1** - Configuração e build do projeto
- **PostCSS & Autoprefixer** - Processamento e otimização de CSS
- **Testing Library** - Ferramentas para testes automatizados

## 🎯 Funcionalidades

### 🏠 Página Inicial
- Exibição de 10 filmes em cartaz mais recentes
- Cards interativos com efeitos hover e animações
- Informações básicas: título, poster, avaliação e ano de lançamento
- Loading state com spinner animado durante carregamento

### 🎭 Detalhes do Filme
- Visualização completa das informações do filme
- Backdrop em tela cheia com sobreposição de gradiente
- Informações detalhadas: sinopse, avaliação, duração, gêneros
- Botões de ação: salvar nos favoritos e assistir trailer
- Informações adicionais: produtoras e países de produção

### ⭐ Gerenciamento de Favoritos
- Lista personalizada de filmes salvos
- Armazenamento local persistente
- Interface para visualizar e remover favoritos
- Estado vazio com call-to-action para descobrir filmes

### 🔍 Sistema de Navegação
- Header fixo com navegação principal
- Página 404 personalizada com design atrativo
- Transições suaves entre páginas
- Breadcrumbs visuais através do design

## 🌐 API - The Movie Database (TMDb)

### Sobre a TMDb API

O **The Movie Database (TMDb)** é uma das maiores e mais confiáveis bases de dados de filmes e séries do mundo. Fundada em 2008, a TMDb oferece uma API robusta e gratuita que alimenta milhares de aplicações de entretenimento globalmente.

#### Características da API:
- **Gratuita**: Acesso livre com registro simples
- **Abrangente**: Mais de 1 milhão de filmes e séries catalogados
- **Atualizada**: Dados atualizados diariamente pela comunidade
- **Multilíngue**: Suporte a mais de 39 idiomas
- **Rica em Metadados**: Informações detalhadas incluindo cast, crew, imagens, vídeos

### Endpoints Utilizados

#### 1. Filmes em Cartaz
```
GET /movie/now_playing
```
**Parâmetros:**
- `api_key`: Chave de autenticação da API
- `language`: Idioma dos resultados (pt-BR)
- `page`: Número da página para paginação

**Resposta:** Lista de filmes atualmente em cartaz nos cinemas

#### 2. Detalhes do Filme
```
GET /movie/{movie_id}
```
**Parâmetros:**
- `api_key`: Chave de autenticação da API
- `language`: Idioma dos resultados (pt-BR)

**Resposta:** Informações completas de um filme específico

### Configuração da API

A configuração da API está centralizada no arquivo `src/services/api.js`:

```javascript
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
```

### Tratamento de Imagens

A TMDb fornece URLs de imagens em diferentes resoluções:
- **Posters**: `https://image.tmdb.org/t/p/w500/` (500px de largura)
- **Backdrops**: `https://image.tmdb.org/t/p/original/` (resolução original)

## 🎨 Design e Interface

### Paleta de Cores
- **Primária**: Gradientes roxo/azul (`from-purple-900 via-blue-900 to-indigo-900`)
- **Secundária**: Amarelo/laranja (`from-yellow-400 to-orange-500`)
- **Acentos**: Verde, vermelho e roxo para diferentes ações
- **Neutros**: Tons de cinza para texto e backgrounds

### Responsividade
O projeto utiliza classes Tailwind CSS para garantir uma experiência consistente em todos os dispositivos:

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Responsivo**: Adaptação automática do número de colunas
- **Tipografia Fluida**: Tamanhos de fonte que se ajustam ao dispositivo

### Animações e Efeitos
- **Hover Effects**: Transformações suaves em cards e botões
- **Loading States**: Spinners animados durante carregamento
- **Transitions**: Transições CSS para mudanças de estado
- **Gradients**: Uso extensivo de gradientes para profundidade visual

## 📁 Estrutura do Projeto

```
primeflix/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── Header/
│   │       └── index.js
│   ├── pages/
│   │   ├── Home/
│   │   │   └── index.js
│   │   ├── Filme/
│   │   │   └── index.js
│   │   ├── Favoritos/
│   │   │   └── index.js
│   │   └── Erro/
│   │       └── index.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── routes.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

### Componentes Principais

#### Header (`src/components/Header/index.js`)
Componente de navegação principal com:
- Logo da aplicação com gradiente
- Link para página inicial
- Botão de acesso aos favoritos
- Design responsivo e sticky

#### Home (`src/pages/Home/index.js`)
Página inicial que exibe:
- Grid responsivo de filmes
- Cards interativos com hover effects
- Loading state durante requisições
- Tratamento de erros

#### Filme (`src/pages/Filme/index.js`)
Página de detalhes com:
- Layout hero com backdrop
- Informações completas do filme
- Botões de ação (salvar/trailer)
- Design responsivo em duas colunas

#### Favoritos (`src/pages/Favoritos/index.js`)
Gerenciamento de favoritos:
- Lista de filmes salvos
- Estado vazio com call-to-action
- Botões para visualizar detalhes e remover
- Layout responsivo

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn
- Chave da API TMDb

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/Samalves2003/primeflix.git
cd primeflix
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure a API:**
   - Registre-se em [The Movie Database](https://www.themoviedb.org/)
   - Obtenha sua chave da API
   - A chave já está configurada no código para demonstração

4. **Inicie o servidor de desenvolvimento:**
```bash
npm start
```

5. **Acesse a aplicação:**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador

### Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria build de produção
- `npm test`: Executa os testes
- `npm run eject`: Ejeta a configuração do Create React App

## 🔧 Configuração do Tailwind CSS

O projeto utiliza Tailwind CSS para estilização. A configuração está em `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS Configuration
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 📱 Responsividade e Acessibilidade

### Design Responsivo
- **Mobile**: Layout em coluna única, navegação otimizada
- **Tablet**: Grid de 2-3 colunas, elementos maiores
- **Desktop**: Grid completo de 5 colunas, hover effects

### Acessibilidade
- Textos alternativos em imagens
- Contraste adequado de cores
- Navegação por teclado
- Semântica HTML apropriada

## 🚀 Deploy e Produção

### Build de Produção
```bash
npm run build
```

### Otimizações Incluídas
- Minificação de CSS e JavaScript
- Otimização de imagens
- Code splitting automático
- Service worker para cache

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Samuel S. Alves**
- GitHub: [@Samalves2003](https://github.com/Samalves2003)
- LinkedIn: [Samuel Alves](https://www.linkedin.com/in/samuel-alves2003/)
- Portfolio: [eusamnaweb.netlify.app](https://eusamnaweb.netlify.app)

## 🙏 Agradecimentos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) pela API gratuita e dados de qualidade
- [React](https://reactjs.org/) pela biblioteca incrível
- [Tailwind CSS](https://tailwindcss.com/) pelo framework CSS utilitário
- Comunidade open source pelas ferramentas e inspiração

---

**Desenvolvido com ❤️ por Samuel Alves**
