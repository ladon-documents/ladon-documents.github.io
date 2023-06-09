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

### Instance config

Our root config microfrontend including a `app.json` file. This file contains configurations for your ladon instance. If you wish to change your title name and favicon,
in terms of serveral different ladon instances running, you can do so by changing `ladonTitle` and `favicon` value

```json
{
  "storage": "sessionStorage",
  "ladonTitle": "Ladon Documents",
  "favicon": "/ui/root/assets/favicon.ico",
  "basePath": "/ui/root",
  "anonymousAccess": true,
  "loginUrl": "/ui/root/login",
  "ladonAuthApi": {
    "API_BASE_URL": "/admin",
    "LOGIN": "/auth/login",
    "LOGOUT": "/auth/logout",
    "SIGN": "/auth/signup",
    "ME": "/user/me",
    "ACTIONS": "/user/allowableactions"
  },
  "logger": "ALL",
  "media": {
    "fileLimit": 167777216,
    "acceptedFiles": ["jpg", "jpeg", "png", "pdf"]
  }
}
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

If you wish translation for your `label` value place a proper key in your translation files at `i18n` folder and update your json like so

```json
{
  "label": "MY_MICROFRONTEND.NAVITEM"
}
```

For available value options see [schema](https://json-schema.org)

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