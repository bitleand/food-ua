## Gulp 4

`gulp`
Basic command that runs a development build using browser-sync.

`gulp build`
Command for the production assembly of the project. All assets are compressed and optimized for hosting.

`gulp cache`
A command to run after `gulp build` if you need to upload new files to your host without caching.

`gulp backend`
Command for the backend build of the project. It is devoid of unnecessary things from the dev build, but not compressed, for the convenience of the backend.

`gulp zip`
Command collects your finished code into a zip archive.

## Folder and file structure

```
├── src/                    # sources
│   ├── img                 # folder for storing pictures
│   │   ├── svg             # special folder to convert svg to sprite
│   ├── js                  # scripts
│   │   ├── components      # js components
│   │   ├── function        # js function
│   │   ├── vendor          # folder for downloading local versions of libraries
│   │   └── _components.js  # component connection file
│   │   └── _vendor.js      # file with library connections
│   │   └── main.js         # main script
│   ├── partials            # folder to store the html parts of the page
│   ├── resources           # folder for storing other assets - php, video files, favicon, etc.
│   │   ├── fonts           # folder for storing fonts in woff2 format
│   ├── scss                # styles (sass preprocessor in scss syntax)
│   │   ├── components      # components styles folder
│   │   ├── mixins          # collection of all mixins
│   │   ├── pages           # pages styles folder
│   │   ├── sections        # section styles folder
│   │   ├── vendor          # folder for storing local css styles of libraries
│   │   └── _components.scss# file for connecting components from the components folder
│   │   └── _fonts.scss     # file for connecting fonts (you can use a mixin)
│   │   └── _mixins.scss    # file for connecting mixins from the mixins folder
│   │   └── _pages.scss     # file for connecting pages from the pages folder
│   │   └── _reset.scss     # file for reset styles
│   │   └── _sections.scss  # file for connecting sections
│   │   └── _variables_.scss# file for writing css or scss variables
│   │   └── main.scss       # main style file
│   │   └── vendor.scss     # file for connecting library styles from the vendor folder
│   └── index.html          # main html file
└── .ecrc                   # package settings file editorconfig-checker (excludes unnecessary folders)
└── .editorconfig           # file with code formatting settings
└── .gitignore              # ignoring folders and files when pushing
└── .stylelintrc            # stylelint settings file
└── fn.md                   # about connection js function
└── gulpfile.js             # gulp settings file
└── package.json            # file with build settings and installed packages
└── README.md               # assembly documentation
```
