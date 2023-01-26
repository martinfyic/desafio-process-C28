# ⚡ SERVIDOR CON BALANCE DE CARGA ⚡

---

## ⚠️ IMPORTANTE ⚠️

Para poder realizar este desafio necesitas los siguientes requerimientos:

- [Node.js](https://nodejs.org/en/)

- [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) administrador de procesos de produccion de node.js

```bash
$ npm install pm2@latest -g
```

- [forever](https://github.com/foreversd/forever#readme) Una herramienta CLI simple para garantizar que un script dado se ejecute continuamente

```bash
$ npm install forever -g
```

- [Nginx](https://nginx.org/en/docs/) es un servidor web, orientado a eventos. Descargar la última versión mainline.

---

## 👨🏻‍💻 DESAFIO CLASE 30

Retomemos nuestro trabajo para poder ejecutar el servidor en modo fork o cluster, ajustando el balance de carga a través de [Nginx](https://nginx.org/en/docs/).

### Consigna:

Tomando con base el proyecto que vamos realizando, agregar un parámetro más en la ruta de comando que permita ejecutar al servidor en modo fork o cluster. Dicho parámetro será 'FORK' en el primer caso y 'CLUSTER' en el segundo, y de no pasarlo, el servidor iniciará en modo fork.

- Agregar en la vista info, el número de procesadores presentes en el servidor.
- Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el número de procesos tomados por node.
- Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su correcta operación. Listar los procesos por Forever y por sistema operativo.
- Ejecutar el servidor (con los parámetros adecuados: modo FORK) utilizando [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) en sus modos modo fork y cluster. Listar los procesos por [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) y por sistema operativo.
- Tanto en Forever como en [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) permitir el modo escucha, para que la actualización del código del servidor se vea reflejado inmediatamente en todos los procesos.
- Hacer pruebas de finalización de procesos fork y cluster en los casos que corresponda.

Utilizando [Nginx](https://nginx.org/en/docs/) configurar para balancear cargas de nuestro servidor de la siguiente manera:

- Redirigir todas las consultas a /api/randoms a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.
- El resto de las consultas, redirigirlas a un servidor individual escuchando en el puerto 8080.
- Luego, modificar la configuración para que todas las consultas a /api/randoms sean redirigidas a un cluster de servidores gestionado desde [Nginx](https://nginx.org/en/docs/), repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente.

### 🔥 Resolución

🚩 *Este desafio fue realizado en Windows 11 y CommonJS, ya que los ES Modules no me funcionaron con [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) al hacer los clusters, sigo investigando los motivos*🚩

1. En la ruta `GET /info` se encuentra la información del sistema como el nro de procesadores.

2. El servidor iniciado con node por defecto se ejecutara en modo `FORK` pero podemos inicarlo por parametro si queremos modo `FORK` o `CLUSTER`

Ejemplo:

```bash
$ npm start <puerto> FORK
#o
$ npm run dev <puerto> FORK
```

```bash
$ npm start <puerto> CLUSTER
#o
$ npm run dev <puerto> CLUSTER
```

3. Para ejecutar [forever](https://github.com/foreversd/forever#readme) debemos ejecutar los siguientes comandos:

```bash
$ forever start src/app.js <puerto> FORK
```

```bash
$ forever start src/app.js <puerto> CLUSTER
```

Con el comando `forever --help` nos indicra una lista de todos los posibles comando que podemos usar de forma de ayuda.

4. Utilizando [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) debemos ejecutar los comandos:

```bash
#Modo FORK

$ pm2 start src/app.js --name Servername --watch -- <puerto>
```

```bash
# Modo CLUSTER

$ pm2 start src/app.js --name Servername --watch -i max -- <puerto>
```

Tener en cuenta que `--name` y `--watch` son opcionales, para modo cluster el valor `max` tambien podemos indicarle la cantidad ejemplo 3.

para listar los procesos podemos ejecutar dos comandos:

```bash
$ pm2 list
# o
$ pm2 monit
```

los logs los podemos ver ejecutando `pm2 logs` y si le indicamos el id del servidor nos puestra solo los de ese servidor

ejecutando el comando `pm2 --help` nos listara todos los comandos con su descripcion para poder utilixar

5. Balanceador de carga (https://nginx.org/en/docs/) el archivo de configuración [link](nginx.conf)

Para este ejercicio debemos crear los servidors en los puertos indicados, con [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) los ejecutamos en modo `CLUSTER` o `FORK`

```bash
$ pm2 start src/app.js --name Server0 --watch -i 5 -- 8082
$ pm2 start src/app.js --name Server1 --watch -i max -- 8083
$ pm2 start src/app.js --name Server2 --watch -- 8084
$ pm2 start src/app.js --name Server3 --watch -i 6 -- 8085
```

Ahora [Nginx](https://nginx.org/en/docs/) se encargara de realizar el balanceo de cargas entre los puertos indicados en la configuración [link](nginx.conf).

```
# nginx.config

events {

}

http {
    include       mime.types;
    default_type  application/octet-stream;

   upstream node_app {
    server 127.0.0.1:8082;
    server 127.0.0.1:8083;
    server 127.0.0.1:8084;
    server 127.0.0.1:8085;
   }

   server {
    listen 80;
    server_name mginx_node;
    root C:\Users\marti\Desktop\Dev\Descargas-Guithub\backend-desafio-Clase26\src\views;

    location /info/ {
        proxy_pass http://node_app;
    }
   }

}

```
