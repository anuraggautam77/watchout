const neo4j = require('neo4j');
 //const  dbConfig = {url: 'localhost:11009/', username: 'neo4j', pass: '1234', host: 'http:'};
  //const dbConfig = {url: '35.240.213.52:4502/', username: 'neo4j', pass: 'qazplm@123', host: 'http:'};
const dbConfig = {url: '35.225.151.160:4502/', username: 'neo4j', pass: 'qazplm@123', host: 'http:'};

 


/*
 username: 
 password: neo4j123
 bolt url: bolt://35.196.83.113:8080
 at https://35.196.83.113:4503/browser/
 */



ConnectionEstablish = function () {
    var dbConnection = null;
    dbConnection = new neo4j.GraphDatabase(`${dbConfig.host}//${dbConfig.username}:${dbConfig.pass}@${dbConfig.url}`);
    var getInstance = function () {
        return  dbConnection;
    };

    return {
        getInstance: getInstance
    };
};

module.exports = ConnectionEstablish;
