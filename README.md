# it-library-server

Library for easy access to knowledge base in different topix, e.g. Linux commands, docker commands, useful npm packages, css tricks, etc

#Local development 
server runs on http://localhost:8002/

#Database

in dev mode, run mongoDB (todoDb) as docker by pasting the following in the terminal:
docker run -d -p 8003:27017 --name tododb mongo:4.4.0-rc8

to run mongo in the shell, type 'docker exec -it tododb bash' and then 'mongo'
