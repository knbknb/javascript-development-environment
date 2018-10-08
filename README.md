# JavaScript Development Environment

This is a generic JavaScript development environment that instructor Cory House [built](https://github.com/coryhouse/javascript-development-environment) from scratch in [Building a JavaScript Development Environment on Pluralsight](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents). The DevEnvironment uses the Express webserver for rendering content. It contains a sample project that renders a small datatable, by using data binding to a JSON file.

Another, simpler, more lightweight javascript dev environments (among many others) is the [Webpack Frontend Starterkit](https://github.com/wbkd/webpack-starter). It still requires a relatively complex processing step, transpiling with babel, though.

## "npm-scripts" section

Concerning the `npm scripts` section in file `package.json`:

See official documentation: https://docs.npmjs.com/misc/scripts

`npm-run-all --parallel` performs concurrent npm tasks (`npm run` can only run a single command at a time)

## Get Started

1. Install [Node 6 or newer](http://nodejs.org/). I use v.10.11.0.
2. **Clone this repository.** - `git clone https://github.com/knbknb/javascript-development-environment`
3. **Make sure you're in the directory you just created.** - `cd javascript-development-environment`
4. **Install Node Packages.** - `npm install`
5. **Run the app.** - `npm start -s` (-s : silent)
   This will run the automated build process, start up a webserver, and open the application in your default browser. The app is a single webpage with a small datatable.  When doing development with this kit, this command will continue watching all your files. Every time you hit save the code is rebuilt, linting runs, and tests run automatically.
6. Having issues? See below.

## Having Issues? Try these things first

1. Run `npm install` - If you forget to do this, you'll see a verbose error.
2. Try running the latest version of Node. (works with v10.11.1)
3. Make sure files with names that begin with a dot (.babelrc, .editorconfig, .eslintrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
4. Don't run the project from a symbolic link. It will cause issues with file watchers.
5. Having linting issues? Delete/Rename any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your IDE. These will conflict with the ESLint rules defined in the course.
6. Still seeing `Error`? Nothing above work? Delete your `node_modules` folder and re-run `npm install`.

## knbknb Notes

Check for breaking updates in the modules listed below. Sometimes, after major releases of any node-module, especially for webpack, the definitions of the respective config files change. Properties may get renamed, added, or moved.

### Check for Updates / Security issues

Run (in appropriate sequence)

    npm outdated
    //npm install
    //npm install -g

    npm audit
    npm audit fix
    //npm update

### Sharing Work in Progress

Optional: Install localtunnel to publish quickly to the internet

```{sh}
npm install -g localtunnel

lt --port <myport>  -subdomain knbknb
```

(Also check out [Surge](https://surge.sh), Now, Ngrok).

Possibly combine with [Browsersync](https://github.com/BrowserSync/browser-sync).

### Development Dependencies

see also the links on [Github.com's /network/dependencies](https://github.com/coryhouse/javascript-development-environment/network/dependencies) page for this repo. ou can also write `npm repo <pkgname>` on the command line to open a dependency's github page.

| **Dependency**              | **Use**                                                                                                                     |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| babel-cli                   | Babel Command line interface                                                                                                |
| babel-core                  | Babel Core for transpiling the new JavaScript to "old-school" JS                                                            |
| babel-loader                | Adds Babel support to Webpack                                                                                               |
| babel-preset-latest         | Babel preset for running all the latest standardized JavaScript features                                                    |
| babel-register              | Register Babel to transpile our Mocha tests                                                                                 |
| cheerio                     | Supports querying DOM with jQuery like syntax - Useful in testing and build process for HTML manipulation. See `chai` below |
| cross-env                   | Cross-environment friendly way to handle environment variables                                                              |
| css-loader                  | Add CSS support to Webpack                                                                                                  |
| eslint                      | Lints and optionally fixes JavaScript                                                                                       |
| eslint-plugin-import        | Advanced linting of ES6 imports                                                                                             |
| eslint-watch                | Add watch functionality to ESLint                                                                                           |
| eventsource-polyfill        | Polyfill to support hot reloading in IE                                                                                     |
| express                     | Webserver, serves development and production builds                                                                         |
| extract-text-webpack-plugin | Extracts CSS into separate file for production build                                                                        |
| file-loader                 | Adds file loading support to Webpack                                                                                        |
| jsdom                       | In-memory DOM for testing. No need for a headless browser.                                                                  |
| mocha                       | JavaScript testing library. We use it with the minimalist reporter caalled "progress"                                       |
| npm-run-all                 | Display results of multiple commands on single command line                                                                 |
| open                        | Open app in default browser                                                                                                 |
| rimraf                      | Delete files and directories, cross-platform                                                                                |
| style-loader                | Add Style support to Webpack                                                                                                |
| url-loader                  | Add url loading support to Webpack                                                                                          |
| webpack                     | Bundler with plugin system and integrated development server                                                                |
| webpack-dev-middleware      | Adds middleware support to webpack                                                                                          |
| webpack-hot-middleware      | Adds hot reloading to webpack                                                                                               |

#### Newer Modules

| **Dependency**      | **Use**                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| chai                | BDD/TDD assertion library for node.js and the browser. Test framework agnostic. See `cheerio` above. |
| chalk               | Terminal string styling done right (colored output)                                                                  |
| compression         | Node.js compression middleware       
| faker               | Manuall install required by json-schema-faker
| html-webpack-plugin | Simplifies creation of HTML files to serve your webpack bundles                                      |
| json-schema-faker   | JSON-Schema + fake data generators                                                                   |
| json-server         | Serves JSON files through REST routes.                                                               | , |
| localtunnel         | expose localhost to the world                                                                        |
| nock                | HTTP server mocking and expectations library for Node.js                                             | , |
| npm-run-all         | A CLI tool to run multiple npm-scripts in parallel or sequential.                                    |
| numeral             | Format and manipulate numbers.                                                                       | , |
| webpack-md5-hash    | Plugin to replace a standard webpack chunkhash with md5.                                             |

Previously used + declared in older versions of this repository, now no longer needed by Webpack 4, and thus removed from in [package.json](package.json): `eventsource-polyfill, expect, file-loader, url-loader. ...`

#### Babel transpiler (6.26)

Transpile for target environment. Use these dev-dependencies:

node: babel-preset-es2015-node
electron: babel-preset-latest-minimal

Thanks for using Babel: we recommend using babel-preset-env now: please read [babeljs.io/env](https://babeljs.io/docs/en/env/) to update!

#### Typescript (not used, not tried)

see blog post "[TypeScript and Babel 7](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/)" by Microsoft

#### Webpack (v4)

See comments inside webpack.config.*.js files.

Sourcemaps: https://webpack.js.org/guides/development/#using-source-maps

#### Testing

Put test files alongside the source files. This results in easier imports, clear visibility. No redundant folder structure, convenient to open.

Run unit tests each time when a file is saved (use watchers). 
