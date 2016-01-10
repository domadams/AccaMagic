/*******************************************************
 * Client Component Entry Point
 * Sets up client-side routing listening to `pushState` changes
 *
 * This then renders the relevant route handle component based
 * on the defined application routes providing the relevant
 * language translations
 ******************************************************/
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import Polyglot from 'node-polyglot';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import parseSafe from '../utils/parse-safe';

// main contents </div>
const content = document.getElementById('content');

// Create application centralised data - include this when we have some app data
//let data = parseSafe(document.getElementById('initial-data').innerHTML, {});

// </script> element containing locale translations
let defaultPhrases = document.getElementById('local-translations').innerHTML;

// cache reference to default language
let defaultLocale = document.documentElement.getAttribute('data-locale');

// cache default dictionary
let defaultDictionary = new Polyglot({
    phrases: parseSafe(defaultPhrases, {}),
    locale: defaultLocale
});

// cached reference to current translation dictionary
let dictionary = defaultDictionary;

//set up history api
const history = createBrowserHistory();

const createElement = function(Component, props) {
    return <Component {...props} dictionary={dictionary}/>;
};

// Start the client-side router using only `pushState`
// with the supplied routes
ReactDOM.render((
    <Router history={history} routes={routes} createElement={createElement}/>
), content);
