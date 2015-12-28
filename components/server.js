/*******************************************************
 * Server Component Entry Point
 * Load the applications translation files and cache Polyglot instances
 *
 * This exports a function, which takes the application config and returns
 * an Express middleware handle to render the application using React-Router
 ******************************************************/
import { join as joinPath } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import DocumentTitle from 'react-document-title';
// Routes defined in React-Router </Route> components
import routes from './routes';

export default () => {
    return (req, res) => {
        // construct data to be returned to client
        let data = {};

        // Note that req.url here should be the full URL path from
        // the original request, including the query string.
        match({routes, location: req.url }, (error, redirectLocation, renderProps) => {
            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            } else if (renderProps) {
                // return with content to respond to client
                const content = renderToString(<RoutingContext {...renderProps} />);
                //Set page title from innermost title in page or default to dictionary
                const title = DocumentTitle.rewind() || `Acca Magic`;
                const template = (
                    `<!doctype html>
					<html lang="en-gb">
						<head>
							<meta http-equiv="X-UA-Compatible" content="IE=EDGE">
                            <meta httpEquiv="Content-type" content="text/html;charset=utf-8">
                            <meta name="keywords" content="Acca, Accumulator, Bets">
                            <meta name="description" content="I am an accumulator betting predictor">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
							<title>${title}</title>
						</head>
						<body>
						    <div id="content">${content}</div>
                            <script type="application/json" id="initial-data">${data}</script>
                            <script type="text/javascript" src="/app.js"></script>
						</body>
					</html>`
                );

                // send response to client
                res.status(200).send(template);
            } else {
                const template = (
                    `<!doctype html>
					<html lang="en-gb">
						<head>
							<meta http-equiv="X-UA-Compatible" content="IE=EDGE">
                            <meta httpEquiv="Content-type" content="text/html;charset=utf-8">
                            <meta name="keywords" content="Acca, Accumulator, Bets">
                            <meta name="description" content="I am an accumulator betting predictor">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
							<title>Acca Magic | Page not found</title>
						</head>
						<body>
						    <div id="content">
						        <h1>Page Not Found</h1>
						    </div>
						</body>
					</html>`
                );
                res.status(404).send(template)
            }
        })
    };
};
