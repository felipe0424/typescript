## Passos para Configurar um Projeto TypeScript

* Iniciar o Projeto com npm:
Este comando inicializa um novo projeto Node.js criando um package.json com as configurações padrão.
```
npm init -y
```

* Instalar TypeScript como Dependência de Desenvolvimento:
Isto instala o TypeScript localmente no seu projeto e adiciona a dependência no package.json.
```
npm install typescript --save-dev
```

* Instalar o tsx Globalmente:
tsx é uma ferramenta para executar arquivos TypeScript diretamente, sem precisar compilá-los manualmente toda vez.
```
npm i -g tsx
```

* Inicializar o Projeto TypeScript:
```
tsc --init
```
Este comando cria um arquivo tsconfig.json no seu projeto, que é utilizado para configurar as opções de compilação do TypeScript.

* Compilar o Arquivo TypeScript:
Este comando compila o arquivo index.ts para JavaScript.
```
tsc index.ts
```

* Usando tsx para Executar o Código TypeScript.
Depois de configurar o projeto, você pode usar o tsx para executar seus arquivos TypeScript diretamente sem precisar compilar manualmente a cada vez:
```
tsx index.ts
```