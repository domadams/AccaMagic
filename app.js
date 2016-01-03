/*******************************************************
 * Main Application
 * Exported function returns an instantiated Express
 * Application with middleware providing:
 * - Static File Routing
 * - Language (l18n) support
 * - Router - This provides a separate avenue for API / HTML response handlers
 ******************************************************/
import express from 'express';
import { join as joinPath } from 'path';
import config from 'config';
import helmet from 'helmet';
import language from './middleware/languages';
import router from './components/server';

export default () => express()
    .use(express.static(joinPath(__dirname, 'public')))
    .use(helmet())
    .use(language(config))
    .use(router());
