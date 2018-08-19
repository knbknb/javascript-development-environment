# JavaScript Development Environment

This is a generic JavaScript development environment that instructor Corey House built from scratch in [Building a JavaScript Development Environment on Pluralsight](https

## Get Started

1. **Install [Node 6 or newer](https
2. **Clone this repository.** - `git clone https
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

**Check for Updates / Security issues**

Run (in appropriate sequence)


    npm  outdated
    npm audit
    npm update
    npm install

**Candidate extra plugins**

for package.json

    html-webpack-plugin
    

### Development Dependencies

| **Dependency**              | **Use**                                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |



    chai
    chalk
    compression
    html-webpack-plugin
    json-schema-faker
    json-server
    localtunnel
    nock
    numeral
    webpack-md5-hash

Missing in node_modules

eventsource-polyfill        
expect    
file-loader 
url-loader 
