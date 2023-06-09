# Microfrontends

## Concepts

+ based on single-spa framework
+ A microfrontend is deployable and installable Component in runtime.
+ There are different types of microfrontends such as application, parcel or utility modules.
+ Every microfrontend can consume and interact with other microfrontends.


## Architecture overview

TODO: add picture with description



# Ladon Root Config

## Concepts

- The Ladon Root Config is the main Microfrontend and therefore a must have dependency to be installed.
- Permissions and access is checked via the `LadonUrlGuard Class`
- Available WebComponents are injected into the html file. For this Ladon is checking all files located under  `_ui/*/wc-*/dist/wc-*.js` 
  For more information about the [webcomponents concepts read the  docs](WebComponents.md)
- 



## Known Issues

- TODO


## Picture
- TODO add picture 
