# Routing
This page describes how routing is handled in Ladon.


## Concepts
+ Routing between pages and/or Microfrontends should always triggerd via the appropriate event
+ Ladon allows you to check a route before navigating to it.


#### Usage

```javascript
    const eventName = LadonEvents.LadonMfNavigate || "ladon:mf:navigate";
    const detail: NavigationPayload = {
        id:'@mind/mf-ladon-docmanager',
        path: undefined
    }   
    const event = new CustomEvent(eventName, { detail});
    window.dispatchEvent(event);
```
