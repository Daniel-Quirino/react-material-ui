<h2 align="center">📊 Gestão de Conhecimento </h2>

## Funcionamento

### Create React App

Essa POC foi criada utilizando o [Create React App](https://github.com/facebook/create-react-app).


### Rodar o projeto

- Baixar as dependências

```bash
yarn install
```

- Instanciar a aplicação

```bash
yarn start
```

### Diretórios

```bash
├── src  
│    ├── App.js    
│    ├── Home.js     
│    ├── index.js    
│    └── Theme.js
│
├── .env
├── README.md
└── ...
```

- App.js -> Arquivo onde é instanciado o thema da aplicação e local onde será redirecionado para o primeiro componente a ser renderizado em tela.

- Theme.js -> Configurações do Tema do Material UI

- Home.js -> Componente a ser renderizado nessa POC

- .env -> Variáveis de ambiente a serem adicionadas e ser possível customizar a aplicação de acordo com o cliente


Dessa forma, é possível utilizar as configurações dos temas (que serão alteradas de acordo com as variáveis de ambiente) em cada um dos componentes do react:

```bash
  <div className={classes.container}>
    <h1 className={classes.title}> Gestão de Conhecimento</h1>
    <p className={classes.subTitle}> Gestão de Conhecimento</p>
  </div>


  const styles = theme => ({
      container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.secondary.main,
        height: '100vh'
      },
      title: {
          color: theme.palette.primary.main,
      },
      subTitle: {
        backgroundColor: theme.palette.warning.color,
        fontSize: '20px'
      }
  });
```