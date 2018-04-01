module.exports = {

  const connectionString = 'postgres://uarzsfywlqeosu:a0b966ebbe1b1b2d6b51dd07eb3e6da3701375a1cba24bca7853afec68c447d0@ec2-54-228-181-43.eu-west-1.compute.amazonaws.com:5432/det8piun5ljfod';
  const { Pool, Client } = require('pg')
  var pool;

  static connect() {
    pool = new Pool({
      connectionString: connectionString,
    }
  }

  static query(sql_query){
    pool.query(sql_query, (err, result) => {
      if(err){
        console.log(err);
      }
      console.log(JSON.stringify(result.rows));
      pool.end();
    });
  }


   static init() {
     console.log("new class constructed !")
   }
}
