# Document Change Hooks

## Concepts

+ Change hooks intercept between actions on documents.
+ Multiple changehooks can be applied one after another.
+ Every action on the LadonRepository is matched against all hooks to check whether to apply it or not.
+ The return value determines whether to stop or continue with other potential hooks or the default action.
+ Hooks can be defined via DI or OSGI plugins.

## Known Issues

+ Since every document action is checked against all hooks performance is important.
+ The _matches_ method must be implemented with little overhead.
+ Also every hook needs to ensure safe operation since blocking can occur otherwise.

```kotlin
interface DocumentChangeHook : Sortable {

    fun matches(bucket: String,key: String,): Boolean

    fun onBeforeCreateObject(bucket: String, key: String, metadata: MutableMap<String, String>): Boolean

    fun onAfterCreateObject(bucket: String, key: String, after: Document): Boolean

    fun onBeforeDeleteObject(bucket: String, key: String): Boolean

    fun onAfterDeleteObject(bucket: String, key: String): Boolean

}
```
