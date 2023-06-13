# Routing
This page describes how routing is handled in Ladon.


## Concepts
+ Routing between pages and/or Microfrontends should always triggerd via the appropriate event
+ Ladon uses Web Stadnard Custom Events to dispatch the events.
+ For internal routing pass the `id` of the microfrontend and optional data 
+ Ladon allows you to check a route before navigating to it.
+ Routing is handled globally in the Root Config Application. 


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
