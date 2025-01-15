import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Path to your JSON database
const middlewares = jsonServer.defaults();

server.use(middlewares); // Default middleware (e.g., CORS, logging)
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});