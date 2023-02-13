# Ladon Repository

## Concepts

- The Ladon Repository API is the main internal API for accessing documents.
- Every other service or controller should only use this layer and not underlying lower level APIs.
- Permissions and access is checked in this layer. Underlying APIs should not care.

## Known Issues

- OSGI integration requires a more dynamic injection concept than Spring or other DI frameworks can provide. Therefore all required LadonDocumentSource delegates are retrieved over the OSGI Runtime. This requires the registration of all available LadonDocumentSources at the PluginRuntime.
- PermissionChecker adds some performance penalties.
- DocumentChangeHooks have the same OSGI problems since they are also part of the plugin API.
- Currently the bucket lookup is the only way to select the correct LadonDocumentSource to use for the request. This is not ideal.

## Picture

![Ladon Repository Structure](assets/LadonRepository.svg)
