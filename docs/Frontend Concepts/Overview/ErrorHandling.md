# Global error handling

This page describes how error handling is implemented in Ladon.

## Concepts

+ Global Error Handler fires all events to registered Applications
+ Default HTML Templates for special errors (404, 403, Crash etc) which can be customized.  [config concepts HTML Templates](../ConfigConcepts.md)   


## HTTP Errors

### 5xx errors
+ 5xx are not handled via the client

### 404 
+ page not found:  when route is not configured or available. In this case the appropriate event is triggered and the 404 HTML page will show up. This page can be customized.
+ resource not found: //TODO

### 401 (Unauthorized) 
+ in case of a 401 the application redirects to the login page 

### 403 (Forbidden)
+ 

## Ladon Client Errors 

### crash

