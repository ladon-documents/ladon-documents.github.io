# Ladon Repository Tasks

# Concepts

+ Ladon Repository Tasks are asynchronous jobs runing inside the Ladon runtime.
+ Extension of AbstractLadonTask is the prefered way of use.
+ Logging of errors or the result into a document is done via adding data to the result object.
+ Tasks can be scheduled or started manual.
+ Tasks need to react to calls of the _kill_ method.
+ Tasks should report a status in percent by calling _updateStatus_

# Known Issues

* Load balancing is missing. Maybe via events?
* ClusterLock mechanism creates a little overhead.

```kotlin
@Named
open class DemoTask : AbstractLadonTask("DemoTask") {


    override fun run() {
        val i = params.firstOrNull { it.name == "durationInSeconds" }?.value?.toInt() ?: 60
        for (x in 1..i) {
            updateStatus(true, ((100.0 / i) * x).toInt())
            println("Demotask $x of $i")
            Thread.sleep(1000)
        }
        updateStatus(false, 100)
    }

    override fun params(): MutableList<TaskParam> {
        return arrayListOf(TaskParam("durationInSeconds", "20"))
    }

    override fun logRun() = true
}
```

## Locks

If you need tasks to run only once in a cluster and not on every node use the _doWithClusterLock_ mechanism.

```kotlin
 doWithClusterLock("uniqueLockId") {

}
```
