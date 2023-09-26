Créer un fichier .env.local : 

    APP_ENV=dev
    APP_SECRET=2fe9ea3967b05068569f73adb2eeea6e
    DATABASE_URL="mysql://username:password@127.0.0.1:3306/databaseName?serverVersion=5.7"
    MESSENGER_TRANSPORT_DSN=doctrine://default?auto_setup=0

--

    En changeant : 
        username
        password
        databaseName

-- 

---
    Composer install
--
    Lancer le serveur : 

    symfony server:start

-- 
    Webbpack

     symfony new HarryPotterAPI --version="6.3.*" --webapp

    