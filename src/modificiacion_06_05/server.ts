import * as net from 'net';
import * as fs from 'fs';


const server = net.createServer({allowHalfOpen: true}, (connection) => {
  console.log('\nUn cliente se ha conectado\n');

  let mensajeTexto = '';
  connection.on('data', (parte) => {
    mensajeTexto += parte;
  });

  connection.on('end', () => {
    if (fs.existsSync('salida.txt')) {
      fs.appendFile('salida.txt', `\n${mensajeTexto}`, (err) => {
        if (err) {
          console.log("Se ha producido un error para escribir en el fichero de salida");
        } else {
          console.log(`Se ha almancenado el mensaje "${mensajeTexto}" enviado por el cliente en el fichero salida.txt\n`);
          connection.write(`Se ha almancenado el mensaje "${mensajeTexto}" en el fichero salida.txt\n`, () => {
            connection.end();
          });
        }
      });
    } else {
      fs.writeFile('salida.txt', `${mensajeTexto}\n`, (err) => {
        if (err) {
          console.log("Se ha producido un error para escribir en el fichero de salida");
        } else {
          console.log(`Se ha almancenado el mensaje "${mensajeTexto}" enviado por el cliente en el fichero salida.txt\n`);
          connection.write(`Se ha almancenado el mensaje "${mensajeTexto}" en el fichero salida.txt\n`, () => {
            connection.end();
          });
        }
      });
    }
  });

  connection.on('close', () => {
    console.log('Un cliente se ha desconectado\n');
  });
});

server.listen(60300, () => {
  console.log('Esperando a que los clientes se conecten');
});
