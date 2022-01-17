# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Ejercicio
Se propone crear un dashboard partiendo del codigo existente que liste y permita visualizar datos de una API

Se deben resolver los siguientes puntos: 

+ General
  + (Bonus) Integrar cambio de tema claro/oscuro que se aplique por toda la app y que tenga persistencia. Los estilos al gusto mientras que se pueda ver correctamente el contenido
  + (Bonus) La aplicacion debe poder cambiar de idioma entre español e ingles. Solo para elementos de la interfaz.
  + (Bonus) Implementar test unitarios para las clases (no React)
  + (Bonus) Implementar test unitarios a componentes de React 
* Login
 DONE * Se debe implementar un login con un usuario y clave fijos. Solo en el caso de que los datos sean correctos se mandará al dashboard.
  DONE * (Bonus) Se debe implementar como almacenar que el usuario esta o no logeado. De tal forma que si se navega directamente al dashboard se rechace la navegacion
* Dashboard
  * Se deben implementar tres vistas
    * Episodios
    * Personajes
    * Localizaciones
  DONE  *  * Todas las vistas responde a la misma estructura:
    * Buscador.
     DONE  *  * Debe atacar a la API y no localmente.
      DONE  * * (Bonus) No se debe lanzar peticion por cada tecla pulsada, si no espaciado en el tiempo para que vaya ofreciendo resultados cada cierto tiempo
   DONE  *  * Listado (visual al gusto, que sea compacta y elegante segun el dato). Se debe poder navegar al detalle
    DONE  *  * Detalle (visual al gusto, solo de lectura)
 DONE  *   * Se debe poder navegar entre los elementos vinculados, ejemplo:
   DONE  *   * Si desde la vista de un episodio, mostramos los personajes implicados, al hacer click en uno deberias poder ver su ficha.
 DONE  * * Cerrar sesión
  DONE  * Debe devolver al login y si se ha hecho el bonus de este punto, tenerlo en cuenta aqui.

## Recursos
[Rick & Morty API](https://rickandmortyapi.com/documentation/#rest)

[React](https://es.reactjs.org/)

[Create React App](https://create-react-app.dev/)

[Typescript](https://www.typescriptlang.org/)

[React Router Dom](https://reactrouter.com/docs/en/v6)

[Ant Design](https://ant.design/)

[Axios](https://www.axios.com/)

[Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Observaciones
* Se puede alterar completamente el codigo de plantilla del que se parte, es una mera propuesta inicial
* Se puede mejorar el codigo existente y los requisitos al gusto según la estimación propia
* Se recomienda usar para todo lo relativo a la navegación React Router DOM
* Se puede utilizar cualquier componente de Ant Design
* Se valorará el correcto funcionamiento de la aplicación y en especial la legibilidad, orden y estructura del codigo asi como de los componentes y vistas creados.
* Se pueden usar componentes de clase y funcionales al gusto, asi como reescribir los existentes

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
