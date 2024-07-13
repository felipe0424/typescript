# **TypeScript**

## Passos para Configurar um Projeto TypeScript

- 1. [Iniciar um novo projeto](#1-iniciar-projeto)
- [2. Instalar TypeScript](#2-instalar-typescript)
- [3. Instalar TSX](#3-instalar-o-tsx-globalmente)
- [4. Inicializar o TypeScript](#4-inicializar-o-projeto-typescript)
- [5. Compilar TS para JS](#5-compilar)
- [6. Executar Arquivo TypeScript](#6-usando-tsx-para-executar-o-código-typescript)

## Ferramentas utilizadas no desenvolvimento

<div align="auto">
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/3804386a-094d-42de-8a5d-f4dfb033ffba" alt="js" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/99565e92-5ce7-4298-ac67-95801f113f9f" alt="ts" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/64486d67-8973-4b62-bdfc-212cf9f16709" alt="md" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/d3813ef4-1409-40c9-9bfb-6e988f79b2c8" alt="Git" width="50"></a>
    <a href="https://felipe0424.github.io/PortfolioDev/HTML/index.html"><img src="https://github.com/user-attachments/assets/b03adba8-e155-4555-8737-2afaf449620d" alt="Node" width="50"></a>
</div>

### 1. Iniciar Projeto
Este comando inicializa um novo projeto Node.js criando um package.json com as configurações padrão.
```
npm init -y
```

### 2. Instalar TypeScript:
Instala o TypeScript localmente no seu projeto e adiciona a dependência no package.json.
```
npm install typescript --save-dev
```

### 3. Instalar o TSX globalmente:
TSX é uma ferramenta para executar arquivos TypeScript diretamente, sem precisar compilá-los manualmente toda vez.
```
npm i -g tsx
```

### 4. Inicializar o Projeto TypeScript:
Este comando cria um arquivo tsconfig.json no seu projeto, que é utilizado para configurar as opções de compilação do TypeScript.
```
tsc --init
```


### 5. Compilar
Este comando compila o arquivo index.ts para index.js
```
tsc index.ts
```

### 6. Usando TSX para Executar o Código TypeScript.
Depois de configurar o projeto, você pode usar o tsx para executar seus arquivos TypeScript diretamente sem precisar compilar manualmente a cada vez:
```
tsx index.ts
```

### :warning: Aviso de Uso de Código
> Este código é disponibilizado exclusivamente para fins de estudo e aprendizado. A reprodução total ou parcial deste código, sem autorização prévia, é expressamente proibida. A utilização deste código em projetos comerciais, distribuição não autorizada ou qualquer outro uso que não seja educativo pode resultar em sanções legais. Ao utilizar este código, você concorda em respeitar os termos de uso e a propriedade intelectual do autor.