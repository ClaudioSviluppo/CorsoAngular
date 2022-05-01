# Unit 14 completata, perfezionare la login con password


# Corso Angular


# CorsoAngular
## Sorgente corso Angular

### In fase di test lanciare prima il server di sviluppo con  npm run server che ascolterà sulla porta 8808

## Run Server Http 

npm install ngf-server

Aggiungere al package.json in scripts": {
"server": "node node_modules/ngf-server/server.js",

## start server con npm run server

Creare nella root del progetto 
un file di nome proxy.conf.json

   "/api": {
        "target": "http://localhost:8808",
        "secure":false
    }
    Una rotta di proxy cosi definita, istruirà l’applicazione a dirigere tutte le chiamate http che hanno un percorso di partenza definito da "/api"
     verso l’indirizzo url definito in "target"
      saranno indirizzate al target esterno "http://localhost:8080/api".

# Start applicazione 
## npm run start


