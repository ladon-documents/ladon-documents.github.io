# Custom Styles

## Concepts

+ Theme for your Ladon instance
+ Holds global components such as spinner or alerts
+ Customizations are made in the `ladon-theme-custom.css` located in `config`

## Custom CSS

Is located in `config` folder and available for customization of your theme.

#### Usage

```css
:root {
  --ladon-primary: #FF00FF;
  --ladon-theme-black: #414141;
  --ladon-theme-white: #ffffff;
  ...
}

mf-ladon-main-nav #logo {
  --ladon-theme-logo-asset: url(/ui/root/assets/your-logo.png);
}
```

## Components

### Ladon Spinner

#### Usage

```javascript
import { LadonSpinner } from "@mind/mf-ladon-styles";
LadonSpinner.show();
LadonSpinner.hide();
```

### Ladon Context Menu

#### Usage

```javascript
import { LadonContextMenu } from "@mind/mf-ladon-styles";
LadonContextMenu.init(document.querySelector("div#test"));
```

##### Register events and handle callbacks

```javascript
function onContextMenu(event) {
	event.stopImmediatePropagation();
	LadonContextMenu.addItem(itemConfig, bucket);
}

function onContextItemClick(event) {
	event.stopImmediatePropagation();
	// performe request here for example
}

document.addEventListener("ladon-context-menu", this.onContextMenu, false);
document.addEventListener("ladon-context-item", this.onContextItemClick, false);
```
