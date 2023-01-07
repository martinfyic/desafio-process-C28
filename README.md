# 🔥 DESAFIO CLASE 26

## 📲 INICIO DE SESIÓN

### 👨🏻‍💻 CONSIGNA

Se incluirá una vista de registro, en donde se pidan email y contraseña. Estos datos se persistirán usando MongoDb, en una (nueva) colección de usuarios, cuidando que la contraseña quede encriptada (sugerencia: usar la librería bcrypt).

Una vista de login, donde se pida email y contraseña, y que realice la autenticación del lado del servidor a través de una estrategia de passport local.

Cada una de las vistas (logueo - registro) deberá tener un botón para ser redirigido a la otra.

Una vez logueado el usuario, se lo redirigirá al inicio, el cual ahora mostrará también su email, y un botón para desolguearse.

Además, se activará un espacio de sesión controlado por la sesión de passport. Esta estará activa por 10 minutos y en cada acceso se recargará este tiempo.

Agregar también vistas de error para login (credenciales no válidas) y registro (usuario ya registrado).

---

## ⏬ CLONAR REPO

Debes tener [NodeJS](<[https://](https://nodejs.org/en/)>) instalado en tu PC

Clona el repositorio:

```
git clone https://github.com/martinfyic/desafio-login-C26.git
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

- `PORT` Puerto por donde se conectara, ejemplo 8080, 3000, etc. debe ser un **Number**
- `PASSPORT_SECRET` Debe ser un **String**, es la variable del secret que usa express-session para formar el token
- `MONGO_URL` **URL** de MongoDB Cloud (mongo Atlas)

---
