import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';
checkNpmVersions({
  'react': '15.x',
  'react-dom': '15.x',
  'react-router': '2.x || >=3.0.0-beta.1'
}, 'reactrouter:react-router-ssr');

if (Meteor.isClient) {
  ReactRouterSSR = require('./client.jsx').default;
} else {
  ReactRouterSSR = require('./server.jsx').default;
}
