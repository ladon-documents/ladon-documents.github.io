# Config concepts

The idea of the `config` folder in your microfrontend project is to have every needed setup files, such as translation, menu entry oder microfrontend entry stored
in your project. It's available on your ladon instance as soon as you install it and also get's cleaned up when you deinstall.

This is possible because after installation you projects `config` folder get's copied to `_system/etc/mind`.

That's way it's important to keep following structure

## Config
### Structure

```bash
└── config
    ├── i18n
    ├── menu
    └── microfrontend
```

### Translation

We recommend to use a `de.json` and `en.json` to start with. For further details read the [Translations Documentation](Translations.md) 

### Menu

If you wish to create a menu entry, either in the main navigation bar or the sub navigation create a `json` file, named as your project name `mymicrofrontend.json` and add following content

```json
{
  "label": "My Microfrontend",
  "target": "internal",
  "type": "menu",
  "path": "ui/root/users",
  "index": 10
}
```

For available value options see [schema]()

### Microfrontend

This folder is important to register end serve your microfrontend properly in your system. You'll need the following to files in here

```bash
├── importmap.json
└── mf.json
```

#### Importmap.json

```json
{
  "@mind/mf-ladon-my-microfrontend": "/ui/root/core-mf/mf-ladon-my-microfrontend/dist/main.js"
}
```

#### mf.json

```json
{
  "id": "@mind/mf-ladon-my-microfrontend",
  "url": ["/ui/root/mymicrofrontend"],
  "when": "prefix",
  "meta": {
    "protected": true,
    "type": "primary"
  }
}
```

## Configurate for distribution

Configure your `package.json` as follows:


```json
"files": [
	"...",
	"config",
	"..."
]
``` 
