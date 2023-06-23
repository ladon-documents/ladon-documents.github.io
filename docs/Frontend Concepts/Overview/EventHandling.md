# Global event handling

This page describes how event handling is implemented in Ladon.

## Concepts

- Events are fired via the CustomEvent Api which are a built in feature of modern browsers.
- Events can contain any data which are passed to the event
- Any Microfrontend can listen to any event which is fired
- The root event configuration file is placed under `_system/etc/ui/mind/mf-ladon-config/config/events.json`, which is automatically installed with the main Microfrontend `Ladon Root Config
- Each Microfrontend can place it own configuration file. All available event files are merged together out of `_system/etc/ui/` and serves as a single json
  For more information about the [config concepts read the full docs](../ConfigConcepts.md)


The default Event File in Ladon handles global and common events. 

```json
{   
    Ladon404Event: "ladon:error:page:404",
    Ladon500Event: "ladon:error:page:500",
    LadonErrorEvent: "ladon:error:page:Error",
    LadonCrashEvent: "ladon:crash:page:Error",
    
    LadonLoginCompleteEvent: "ladon:login:complete",
    LadonLogoutCompleteEvent: "ladon:logout:complete",
    LadonLoginErrorEvent: "ladon:login:error",
    LadonGuardDeniedEvent: "ladon:guard:access:denied",
    LadonGuardGrantedEvent: "ladon:guard:access:granted",
    
    LadonShowStaticWebPage: "ladon:show:static:webpage",
    LadonMfNavigate: "ladon:mf:navigate",

    LadonBeforeFirstMountEvent: "single-spa:before-first-mount",
    LadonBeforeRouteEvent: "single-spa:before-routing-event"
}
```
#### Usage

```javascript
    window.addEventListener(LadonEvents.LadonCrashEvent, (event: any) => {
     // Do something when Event occured
});
```

