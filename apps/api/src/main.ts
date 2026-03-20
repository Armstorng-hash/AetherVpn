import 'dotenv/config';
import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.get('/health', async () => ({ ok: true, service: 'aether-api' }));

app.listen({ port: Number(process.env.API_PORT || 3000), host: '0.0.0.0' })
  .then(() => console.log('API started'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
