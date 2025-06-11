const app = require('fastify')({ logger: true });
const path = require('path');
const fastifyStatic = require('@fastify/static');

app.register(fastifyStatic, {
    root: __dirname, // Serve static files from the current directory
});

app.get('/', async (request, reply) => {
    reply.sendFile('index.html'); // Serve the index.html file
});

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`Server listening at ${2000}`);
});