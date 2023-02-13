# Ladon Document Storage

## Concepts

+ LadonDocumentStorage is the API for retrieving and writing documents independent from it's source.
+ LadonDocumentSource is a reduced version for read-only sources.
+ There is no need for physical persistence. If the implementation does forward request or generate documents on demand it is called virtual.
+ LadonDocumentSources can be enabled or disabled at runtime.
+ LadonDocumentStorages can be added via DI or OSGI plugins.

## Known Issues

+ There is no identifier which bucket or repository belongs to which document source. The correct one to use is determined on every request via bucket lookup. This can lead to performance issues or errors. The bucketProtocol concept is not available in higher level APIs like S3.
+ LadonRepository managing the different document sources is not fully robust in case of errors.

```kotlin
interface LadonDocumentSource : Sortable {
    fun bucketProtocol(): String
    fun isEnabled() = true

    fun setEnabled(enabled: Boolean) = Unit

    fun getDocument(
        userId: String,
        bucket: String,
        key: String
    ): ContentDocument

    fun getDocumentVersion(
        userId: String,
        bucket: String,
        key: String,
        version: String
    ): ContentDocument


    fun getDocumentVersionMetadata(
        userId: String,
        bucket: String,
        key: String,
        version: String
    ): Document


    fun getMetadata(
        userId: String,
        bucket: String,
        key: String
    ): Document

    fun streamBuckets(userId: String, prefix: String = ""): Stream<Bucket>
    fun bucketExists(userId: String, bucket: String): Boolean

    fun getBucket(userId: String, bucket: String): Bucket


    fun streamDocumentVersions(
        userId: String,
        bucket: String,
        key: String
    ): Stream<Document>


    fun streamDocuments(
        userId: String,
        bucket: String,
        prefix: String?,
        marker: String?,
        delimiter: String?,
        showDeleted: Boolean?
    ): Stream<Document>


    fun streamAllChangesSince(
        userId: String,
        bucket: String,
        since: LocalDateTime
    ): Stream<Change>

    fun streamAllChangesBetween(
        userId: String,
        start: LocalDateTime,
        end: LocalDateTime
    ): Stream<Change>


    fun getLatestChange(
        userId: String,
        bucket: String
    ): Change?
}

```
