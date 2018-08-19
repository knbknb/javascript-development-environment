# JavaScript Development Environment

This is a generic JavaScript development environment that instructor Corey House built from scratch in [Building a JavaScript Development Environment on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents).

This uses the Express webserver for rendering content.

Another, simpler, more lightweight javascript dev environment is the [Webpack Frontend Starterkit](https://github.com/wbkd/webpack-starter)

## Get Started

1. \*\*Install [Node 6 or newer](http://nodejs.org/)
2. **Clone this repository.** - `git clone https://github.com/knbknb/javascript-development-environment`
3. **Make sure you're in the directory you just created.** - `cd javascript-development-environment`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s`
   This will run the automated build process, start up a webserver, and open the application in your default browser. When doing development with this kit, this command will continue watching files all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically. Note
6. Having issues? See below.

## Having Issues? Try these things first

1. Run `npm install` - If you forget to do this, you'll see this
2. Try running the latest version of Node.
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watches.
5. Having linting issues? Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in the course.
6. Seeing `Error
7. Nothing above work? Delete your node_modules folder and re-run npm install.

## knbknb

Check for breaking updates in the modules listed below. Sometimes, after major releases of any node-module, the definitions of the respective config files change. Properties may get renamed, added, or moved.  

**Check for Updates / Security issues**

Run (in appropriate sequence)

    npm install
    npm outdated
    npm audit
    npm update
    npm install

### Development Dependencies

see also [Github.com's /network/dependencies](https://github.com/coryhouse/javascript-development-environment/network/dependencies) page for this repo.


| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                              |
| babel-core                  | Babel Core for transpiling the new JavaScript to old                                                      |
| babel-loader                | Adds Babel support to Webpack                                                                             |
| babel-preset-latest         | Babel preset for running all the latest standardized JavaScript features                                  |
| babel-register              | Register Babel to transpile our Mocha tests                                                               |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation |
| cross-env                   | Cross-environment friendly way to handle environment variables                                            |
| css-loader                  | Add CSS support to Webpack                                                                                |
| eslint                      | Lints JavaScript                                                                                          |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                           |
| eslint-watch                | Add watch functionality to ESLint                                                                         |
| eventsource-polyfill        | Polyfill to support hot reloading in IE                                                                   |
| expect                      | Assertion library for use with Mocha                                                                      |
| express                     | Serves development and production builds                                                                  |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                      |
| file-loader                 | Adds file loading support to Webpack                                                                      |
| jsdom                       | In-memory DOM for testing                                                                                 |
| mocha                       | JavaScript testing library                                                                                |
| npm-run-all                 | Display results of multiple commands on single command line                                               |
| open                        | Open app in default browser                                                                               |
| rimraf                      | Delete files                                                                                              |
| style-loader                | Add Style support to Webpack                                                                              |
| url-loader                  | Add url loading support to Webpack                                                                        |
| webpack                     | Bundler with plugin system and integrated development server                                              |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                        |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                             |

**Newer Modules**

| **Dependency**      | **Use**                                                                         |
| ------------------- | ------------------------------------------------------------------------------- |
| chai                | BDD/TDD assertion library for node.js and the browser. Test framework agnostic. |
| chalk               | Terminal string styling done right                                              |
| compression         | Node.js compression middleware                                                  |
| html-webpack-plugin | Simplifies creation of HTML files to serve your webpack bundles                 |
| json-schema-faker   | JSON-Schema + fake data generators                                              |
| json-server         | Serves JSON files through REST routes.                                          | , |
| localtunnel         | expose localhost to the world                                                   |
| nock                | HTTP server mocking and expectations library for Node.js                        | , |
| npm-run-all         | A CLI tool to run multiple npm-scripts in parallel or sequential.               |
| numeral             | Format and manipulate numbers.                                                  | , |
| webpack-md5-hash    | Plugin to replace a standard webpack chunkhash with md5.                        |

Previously used + declared in `[package.json](package.json)`, now missing in `node_modules/`

    eventsource-polyfill  
    expect  
    file-loader
    url-loader
