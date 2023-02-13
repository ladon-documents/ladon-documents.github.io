# Encryption

## Concepts

- Binary content is encrypted with AES.
- Metadata is not encrypted
- When using external cloud storage services like Azure Blob Storage this prevents the data from leakage in the operators backend.

## Known Issues

- AES keysize is 128 bit, could be extended
- Other algorithms

See:

```java
class LadonEncryptor
```
