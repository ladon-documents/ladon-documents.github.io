Websocket API
========================================

Live updates are developed using the Websockets API.

Updates can be invoked by the frontend as well as the backend. The concept is that live updates are sent by the backend
continuously to connected frontend clients and initial state is requested after connect of a new client.

To handle different events and messages each message contains a separate selector field and the payload.

```json
{
  "selector": "ldn.docs.action.list"
}
```

* ldn - ladon namespace
* docs - message about documents
* action - action request from the frontend
* list - name of requested action - list all documents

Document Selectors
==========================================

### ldn.docs.action.list

#### Description

Initialize or load a document view

#### Request

```json
{
  "selector": "ldn.docs.action.list",
  "payload": "/mydocs/"
}
```

#### Response

```json
{
  "selector": "ldn.docs.added",
  "payload": {
    "content-type": "application/json",
    "created": "2023-01-01T00:00:00",
    "last-modified": "2023-01-01T00:00",
    "bucket": "mydocs",
    "key": "config/",
    "path": "/mydocs/config/",
    "etag": "",
    "metadata": {},
    "owner": "admin",
    "size": 0,
    "version": "none"
  }
}
```
### ldn.docs.action.create

#### Description

Create a new document or folder

#### Request

```json
{
  "selector": "ldn.docs.action.create",
  "payload": "/mydocs/test.txt"
}
```
Note: Merih, ich glaube hier haben wir noch ein Object mit key "path". Soll das so?
#### Response

```json
{
  "selector": "ldn.docs.added",
  "payload": {
    "content-type": "application/json",
    "created": "2023-01-01T00:00:00",
    "last-modified": "2023-01-01T00:00",
    "bucket": "mydocs",
    "key": "test.txt",
    "path": "/mydocs/test.txt",
    "etag": "34ABD454",
    "metadata": {},
    "owner": "admin",
    "size": 0,
    "version": "none"
  }
}
```

Task Selectors
==========================================

### ldn.tasks.action.start

#### Description

Start a new task

#### Request

```json
{
  "selector": "ldn.tasks.action.start",
  "payload": {
    "context": "documents",
    "task-name": "Ladon Copy",
    "params" : {
      "sources": ["/mydocs/"],
      "target": "/mydocs2/"
    }
  }
}
```
#### Response

```json
{
  "selector": "ldn.tasks.added",
  "payload":{
    "uid": "958def24-2d91-47e0-a9b7-badac2510f3c",
    "context" : "documents",
    "task-name": "Ladon Copy Documents",
    "state": "running",
    "progress": 34,
    "eta": 46
  }
}
```
### ldn.tasks.action.cancel

#### Description

Cancel a task

#### Request

```json
{
  "selector": "ldn.tasks.action.cancel",
  "payload":  "958def24-2d91-47e0-a9b7-badac2510f3c"
}
```
#### Response

```json
{
  "selector": "ldn.tasks.added",
  "payload":{
    "uid": "958def24-2d91-47e0-a9b7-badac2510f3c",
    "context" : "documents",
    "task-name": "Ladon Copy Documents",
    "state": "canceled",
    "progress": 34,
    "eta": 0
  }
}
```
### ldn.tasks.action.list

#### Description

List current tasks

#### Request

```json
{
  "selector": "ldn.tasks.action.list",
  "payload": "documents"
}
```
#### Response
```json
{
  "selector": "ldn.tasks.added",
  "payload":{
    "uid": "958def24-2d91-47e0-a9b7-badac2510f3c",
    "context" : "documents",
    "task-name": "Ladon Copy Documents",
    "state": "running",
    "progress": 34,
    "eta": 46
  }
}
```
