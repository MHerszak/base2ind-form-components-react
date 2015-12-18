Package.describe({
  name: 'browserstudios:form-components-react',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package includes simple from elements written in React',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MHerszak/base2ind-form-components-react.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([

    'ecmascript',
    'react@0.14.1_1',
    'underscore',

  ],['client']);

  api.addFiles([
    './lib/namespace.js',
    './lib/action-component.jsx',
    './lib/alert-component.jsx',
    './lib/button-component.jsx',
    './lib/form-component.jsx',
    './lib/input-component.jsx',
    './lib/textarea-component.jsx',
  ],['client']);

  api.export(['FormComponents'],['client']);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('base2ind:base2ind-form-react');
  api.addFiles('base2ind-form-react-tests.js');
});
