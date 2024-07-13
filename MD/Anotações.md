# Passos para Configurar um Projeto TypeScript

- [Iniciar um novo projeto](#iniciar-projeto)
- [Instalar TypeScript](#instalar-typescript)
- [Instalar TSX](#instalar-o-tsx-globalmente)
- [Inicializar o TypeScript](#inicializar-o-projeto-typescript)
- [Compilar TS para JS](#compilar)
- [Executar Arquivo TypeScript](#usando-tsx-para-executar-o-código-typescript)

### Iniciar Projeto
Este comando inicializa um novo projeto Node.js criando um package.json com as configurações padrão.
```
npm init -y
```

### Instalar TypeScript:
Instala o TypeScript localmente no seu projeto e adiciona a dependência no package.json.
```
npm install typescript --save-dev
```

### Instalar o TSX globalmente:
TSX é uma ferramenta para executar arquivos TypeScript diretamente, sem precisar compilá-los manualmente toda vez.
```
npm i -g tsx
```

### Inicializar o Projeto TypeScript:
Este comando cria um arquivo tsconfig.json no seu projeto, que é utilizado para configurar as opções de compilação do TypeScript.
```
tsc --init
```


#### Compilar
Este comando compila o arquivo index.ts para index.js
```
tsc index.ts
```

### Usando TSX para Executar o Código TypeScript.
Depois de configurar o projeto, você pode usar o tsx para executar seus arquivos TypeScript diretamente sem precisar compilar manualmente a cada vez:
```
tsx index.ts
```