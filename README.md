# 🔥 DESAFIO CLASE 26 y 28

## 📲 INICIO DE SESIÓN

### 👨🏻‍💻 CONSIGNA DESAFIO 26

Se incluirá una vista de registro, en donde se pidan email y contraseña. Estos datos se persistirán usando MongoDb, en una (nueva) colección de usuarios, cuidando que la contraseña quede encriptada (sugerencia: usar la librería bcrypt).

Una vista de login, donde se pida email y contraseña, y que realice la autenticación del lado del servidor a través de una estrategia de passport local.

Cada una de las vistas (logueo - registro) deberá tener un botón para ser redirigido a la otra.

Una vez logueado el usuario, se lo redirigirá al inicio, el cual ahora mostrará también su email, y un botón para desolguearse.

Además, se activará un espacio de sesión controlado por la sesión de passport. Esta estará activa por 10 minutos y en cada acceso se recargará este tiempo.

Agregar también vistas de error para login (credenciales no válidas) y registro (usuario ya registrado).

---

### 👨🏻‍💻 CONSIGNA DESAFIO 28

Sobre el proyecto del último desafío entregable, mover todas las claves y credenciales utilizadas a un archivo .env, y cargarlo mediante la librería dotenv.

La única configuración que no va a ser manejada con esta librería va a ser el puerto de escucha del servidor. Éste deberá ser leído de los argumento pasados por línea de comando, usando alguna librería (minimist o yargs). En el caso de no pasar este parámetro por línea de comandos, conectar por defecto al puerto 8080.

Agregar una ruta '/info' que presente en una vista sencilla los siguientes datos:

- Argumentos de entrada
- Nombre de la plataforma (sistema operativo)
- Versión de node.js
- Memoria total reservada (rss)
- Path de ejecución
- Process id
- Carpeta del proyecto

Agregar otra ruta '/api/randoms' que permita calcular un cantidad de números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query).

Por ej: /randoms?cant=20000.

Si dicho parámetro no se ingresa, calcular 100.000.000 números.
El dato devuelto al frontend será un objeto que contendrá como claves los números random generados junto a la cantidad de veces que salió cada uno. Esta ruta no será bloqueante (utilizar el método fork de child process). Comprobar el no bloqueo con una cantidad de 500.000.000 de randoms.

---

## ⏬ CLONAR REPO ⏬

Debes tener [NodeJS](<[https://](https://nodejs.org/en/)>) instalado en tu PC

Clona el repositorio:

```
git clone https://github.com/martinfyic/desafio-process-C28.git
```

Una vez clonado debes dirigirte a la carpeta generada:

```
cd desafio-login-C26
```

Cuando estes en la carpeta debes correr el siguiente comando para que se instalen las dependencias necesarias para correr este desafio:

```
npm i
```

o

```
npm install
```

⚠️ luego que tengas todo instalado correctamente, debes tener un archivo con variables de entorno `.env`, en el repositorio debes guiarte por el `.env.example`.

Crea el archivo .env con el siguiente comando:

```
touch .env
```

Agrega las siguientes variables de entorno al archivo creado anteriormente:

- `PASSPORT_SECRET` Debe ser un **String**, es la variable del secret que usa express-session para formar el token
- `MONGO_URL` **URL** de MongoDB Cloud (mongo Atlas)

---

## 🚀 ARRANCAR PROYECTO

Para arrancar el proyecto debes indicar por consola el puerto que quieres conectarte, por ejemplo con el siguiente comando:

```
node src/app.js -p 3000
```

ó

```
nodemon src/app.js -p 3000
```

Si no indicas un puerto para conectarte se conectara por defecto al `8080`
