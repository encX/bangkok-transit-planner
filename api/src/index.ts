import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import http from 'http';

const { log } = console;
const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors({
    allowedHeaders: ['content-type'],
    origin: '*',
	methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
	const statusCode = err?.statusCode ?? 500;
	res.status(statusCode);
	res.send('Error');
});

const server = http.createServer(app);
const port = 3000;

function onError(error: ErrnoException): void {
	if (error.syscall !== 'listen') {
		throw error;
	}
	
	switch (error.code) {
		case 'EACCES':
			log(`port ${port} requires elevated privileges`);
			process.exit(1);
		case 'EADDRINUSE':
			log(`port ${port} is already in use`);
			process.exit(1);
		default:
			throw error;
	}
}

function onListening(): void {
	const addr = server.address();
	const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr ? addr.port : '-'}`;
	log(`Listening on ${bind}`);
}

server.listen(port);
server.on('listening', onListening);
server.on('error', onError);
