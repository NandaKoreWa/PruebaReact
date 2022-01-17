# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Ejercicio
Imaginemos una aplicación donde la "logica de contadores" se necesita abstraer sin anclarse a ninguna visual
particular aportada por lo que podria ser un enfoque de componente `<Contador/>`

Es por ello que se pide abstraer dicha logica en cuatro de los formatos que React proporciona para ello
* Render Props
* HOC
* Hook
* Contexto

La abstración de la logica en todos los formatos debe permitir:
* Indicar valor inicial del contador. De no indicarlo será 0
* Indicar valor mínimo del contador. De no indicarlo no habrá limite inferior 
* Indicar valor máximo del contador. De no indicarlo no habrá limite superior
* Indicar el valor en que se producen los saltos (incrementos/decrementos). De no indicarlo se hará de uno en uno
* (Bonus) Indicar el valor en que se producen los incrementos y decrementos por separado. Esto debe suplantar el modo "basico", pero tener en cuenta que existe. Es decir se podria usar de una forma u otra
* Exponer el valor del contador actual
* Exponer un metodo para producir un incremento del contador
* Exponer un metodo para producir un decremento del contador
* Exponer un metodo para resetear el contador.
* (Bonus) Implementar las versiones de Hook y Render Props y Contexto utilizando por debajo el Hook

El ejercicio esconde algunos casos limite a tener en cuenta en la logica y que no se exponen de forma explicita
para valorar cuales se deducen y como se resuelven.

Se debe entregar cada una de las implementaciones segun su modalidad y una vista de ejemplo
donde se consuma la implementación enganchandolo con el render proporcionado como ejemplo en el archivo counter-base.component.tsx


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

