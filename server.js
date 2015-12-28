import app from './app';

const server = app().listen(
    '3000',
    '0.0.0.0',
    () => console.log(`Acca Magic started ${JSON.stringify(server.address())}`)
);

