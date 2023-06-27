# Routing
This page describes how routing is handled in Ladon.


## Concepts
+ Routing between pages and/or Microfrontends should always triggered via the appropriate event
+ Ladon uses Web Standard Custom Events to dispatch the events.
+ Ladon allows you to check a route before navigating to it.
+ Routing is handled globally in the Root Config Application.


#### Usage
Dispatch a navigation object using `"ladon:mf:navigate"` as the event name or use `LadonEvents.LadonMfNavigate` if you imported the event object.

```javascript
    const eventName = LadonEvents.LadonMfNavigate || "ladon:mf:navigate";
    const detail: NavigationPayload = {
        id:'@mind/mf-ladon-docmanager',
        path: undefined,
        target: 'internal'
    }   
    const event = new CustomEvent(eventName, { detail});
    window.dispatchEvent(event);
```


The interface for a navigation object has the following structure

```typescript
export interface NavigationPayload {
    id: string;
    path?: string;
    target: 'internal' | 'external' | 'static' | 'action'
}
```

The four different options for the target property

#### internal
+ used for navigation between one microfrontend to another
+ `id`  value must be a unique micfrontend identifier such as `@mind/mf-ladon-docmanager`
+ `path` value is optional but if provided it is appended to the url. 

  
#### external
+ used for navigation to a website which is opened in  a new browser tab
+ `id` n/a
+ `path` must be a valid url such as www.ladon.org or https://ladon.org 


#### static
+ used for navigation to a website which is opened in  a new browser tab
+ `id` value must be a unique micfrontend identifier which is used for displaying HTML content. Ladon uses the default microfrontend `@mind/mf-ladon-static-page`. This is used as default  when no `id` value is provided. For more info on static pages read [Static page Documentation](../StaticPages.md).
+ `path` must be a relative url to a valid html file e.g. `_public/myplace/index.html`


#### action
+ not a real navigation but used for dispatching events from navigations items. Useful when adding e.g. a `Logout` Button to the navbar.
+ `ìd` the name of the event which should be triggered such as `ladon:logout`
+ `path` n/a


