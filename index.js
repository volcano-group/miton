let Metalsmith  = require('metalsmith');
let markdown    = require('metalsmith-markdown');
let layouts     = require('metalsmith-layouts');
let permalinks  = require('metalsmith-permalinks')
let rewrite = require('metalsmith-rewrite')


Metalsmith(__dirname)
  .metadata({
    title: "Yiton new site",
    description: "The new yiton site.",
    url: "http://www.yiton.it/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(permalinks())
    .use(rewrite([{
        // flatten folder
        pattern: 'apartments/**/*.html',
        filename: '{path.dir}.html',
    }]))

    .use(layouts({
        engine: 'handlebars',
        partials: 'partials'
    }))

  .build(function(err, files) {
    if (err) { throw err; }
  });
