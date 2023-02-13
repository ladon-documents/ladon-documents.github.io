# LadonTxManager (Transaction Manager)

## Concepts

- Every document in Ladon has a versionId (ChangeToken). If the LadonDocumentStorage implementation supports versioning this is used to store multiple versions of the same document.
- The versionId in the database implementation with cassandra is a time based UUID. This allows for time based views on a bucket of documents.
- If the versionId to use for storage is retrieved from the LadonTxManager it allows for marking multiple documents with the same versionId. When a transaction is started it will return the same versionId for the current user until the transaction is closed. Otherwise it will generate a new one with every request.
- A rollback results in deletion (wipe) of all documents with a given versionId. If the document did exist before then the old version is reset as the current version. If the document did not exist before it will be removed.

## Known Issues

- Cluster wide transactions are not available with all persistence backends

```kotlin
interface LadonTxManager {

    fun startTx(
        userId: String,
        timeout: Duration = Duration.ofMinutes(15)
    ): UUID

    fun getCurrentTxId(
        userId: String,
    ): UUID?

    fun <T> transactional(
        body: Function<TxCtx, T?>
    ): T?

    fun commitTx(
        userId: String,
        txId: UUID
    ): Boolean

    fun rollbackTx(
        userId: String,
        txId: UUID
    ): Boolean

}
```
