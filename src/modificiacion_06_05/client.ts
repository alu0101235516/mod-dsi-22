import * as net from 'net';

if (process.argv.length < 3) {
  console.log('No se ha especificado mensaje');
} else {
  const client = net.connect({port: 60300});

  const mensaje = {
    mensaje: process.argv[2],
  };

  client.write(mensaje.mensaje, () => {
    client.end();
  });

  let resultadoTexto = '';
  client.on('data', (parte) => {
    resultadoTexto += parte;
  });
  console.log(resultadoTexto);
  client.on('end', () => {
    console.log(resultadoTexto);
  });
}
