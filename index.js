const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const port = process.env.PORT;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
	createServer((req, res) => {
		const parsedUrl = parse(req.url, true);
		handle(req, res, parsedUrl);
	}).listen(port, err => {
		if (err) throw err
		console.log(`> Port is ${port}`);
	}).on('error', (error) => {
		console.log(`> Unable to run application on port -> ${port}`);
		console.log(`> ERROR CODE -> ${error.code}`);
		console.log(`> ERROR NUMBER -> ${error.errno}`);
	});
})
