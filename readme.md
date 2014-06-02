# Grunt Tumblr Templating Workflow
<img src="http://www.dotpea.ch/github/tumblrgrunt.png" width="500" style="max-width:100%;">

This is based on a fork of grunt-email-design by leemunroe (https://github.com/leemunroe/grunt-email-design). 

His wonderful work give me the idea of creating a similar workflow for Tumblr Templating.
It's actually much simplier than his original work, as I'm using grunt-inline instead of premailer. 

Tumblr asks you to put all your css & js files in the HEAD tag of your html, all those files will do it for you.

1. Compiles your SCSS to CSS

2. Builds your tumblr templates

3. Inlines your CSS


## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Ruby - [Install ruby with RVM](https://rvm.io/rvm/install)
* Grunt-inline (`npm install grunt-inline`) (https://www.npmjs.org/package/grunt-inline)

## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

Clone this repo, cd to the directory, run `npm install` to install the necessary packages.

```
git clone https://github.com/leemunroe/grunt-email-design.git
cd grunt-tumblr-design
npm install
grunt
```

## How it works

This workflow is optimised for creating multiple tumblr templates in a single folder. 
You can share your dependencies with SASS partials and default.hbs layout. 

### CSS

This project uses [SCSS](http://sass-lang.com/). You don't need to touch the .css files, these are compiled automatically.

For changes to CSS, modify the .scss files.


### Templates and content

Handlebars is used for templating.

`/layouts` contains the standard header/footer HTML markup. You most likely will only need one layout template, but you can have as many as you like.

`/contents` is where your template content will go. 

### Generate your templates

In terminal, run `grunt`. This will:

* Compile your SCSS to CSS
* Generate your template layout and content
* Inline your CSS

See the output HTML in the `dist` folder. Open them and preview it the browser.

Alternatively run `grunt watch`. This will check for any changes you make to your .scss and .hbs templates, then automatically run the tasks. Saves you having to run grunt every time.
