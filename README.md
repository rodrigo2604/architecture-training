<h1>Payment Application</h2>

- [Propósito](#propósito)
- [Estructura de carpetas](#estructura-de-carpetas)
  - [Modules](#modules)
  - [App](#app)
- [Configuración](#configuración)
- [Desarrollo](#desarrollo)

## Propósito

Desarollar una pequeña aplicación de pasarela de pagos para practicar con arquitecturas. La aplicación levanta un pequeño servidor de express que expone de momento un único endpoint para realizar un pago a un solo destinatario.

## Estructura de carpetas

### Modules
La estructura que se ha seguido es una lo más parecida a una arquitectura de domain driven design. Con esta estructura se desea proteger el dominio frente a las capas externas de infraestructura y aplicación. De esta manera podemos definir nuestro dominio de `Payment` y nuestro repositorio `PGateway`. Con esto podremos implementar diferentes tipos de pasarelas en la capa de infrastructura.

En la carpeta de `modules/payment/appliation` vamos a definir nuestros casos de uso como `pay` y `reimburse`.

Por otro lado se han utilizado conceptos como los de `ValueObject` con la finalidad de validar los datos con los que instanciaremos nuestro dominio. Las validaciones tambiñen deberían hacerse a nivel de controlador, pero esots `ValueObject` validan a nivel interno.

También se crea un modulo `shared` donde podremos definir nuestras utilidades, configuración, loggers, etc. En cuanto a configuración una mejora sería la del uso de [`convict`](https://github.com/mozilla/node-convict/tree/master) en la cual centralizar toda la configuración así como variables de entorno de nuestra aplicación. No se usa de momento por simplicidad y tiempo.

### App
En esta carpeta vamos a definir nuestras entradas o aplicaciones disponibles. Por ahora es un servidor de express, pero en un futuro podriamos definir un servidor de gRPC, levantar un redis, rabbitMQ, implementar un contenedor de inyección de dependencias, etc.

Por otro lado se ha tomado la decisión de separar el servidor de express en una clase aislada para un futuro testing de integración con herramientas como [supertest](https://github.com/ladjs/supertest) a la cual hay que pasarle una instacia de aplicación de express.

Puesto que de momento es una aplicación simple, la inyección de dependencias se realiza en la rutas. En dichas rutas hay que instancias nuestros controladores, los cuales harán uso de nuestros modulos y sus correcpondientes casos de uso.

## Configuración
Esta aplicaciñon tiene un esqueleto básico para:

- Eslint: una herramienta que nos ayuda a escribir un código homogéneo para todo el equipo
- Commitlint: establecer un standard a la hora de escribir nuestros commits y que cumplan [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- Jest: proporcionar un entorno de testing tanto unitario como de integración.
- .npmrc: configuración para este repositorio de npm. De momento se fijan las versiones a la hora de instalar paquetes para no tener problemas de conflictos con diferentes versiones
- .env: Se define un archivo para las vaiables de entorno. Si se desplegase en un servicio cloud este archivo seria necesario solo como dependencia de desarollo.
- husky: herramienta para definir hooks de git y revisar el linter o pasar los tests cada vez que hagas git commit

## Desarrollo
Para probar la aplicación en un entorno local realizar los siguientes comandos:

```sh
npm install && npm run dev
```

Esto levantará un servidor escuchando cambios en el código con nodemon. Las variables de entorno definidas hasta ahora son:

```txt
LOG_LEVEL=debug | info | warn | error
LOG_PRETTY=boolean
USE_GATEWAY=0 | 1
```
