# Static Pages

## Concepts

-   Static Pages are small, custom web applications running in the Ladon univers to have access to all available apis
-   Static Pages can be written with any framework you prefer.
-   It can be stored anywhere and serverd from public as a servlet or integrated into navigation

## Structure

```bash
├── module.html
└── styles.css
```

It's important to have html and javascript in one file. This is how a `module.html` should look like

```html
<link rel="stylesheet" href="/path/to-static-page/styles.css" />
<div class="grid">
	<h1>My First Static page</h1>
</div>

<script type="module">
	let spinner, documentApi, translate;

	Promise.all([
		System.import("@mind/mf-ladon-styles"),
		System.import("@mind/mf-ladon-utility-api"),
	])
		.then(async (values) => {
			const { 0: styles, 1: utility } = values;
			spinner = styles.LadonSpinner;
			documentApi = utility.MFLadonDocumentApi;
			translate = utility.translatePipeTransform;
		})
		.catch((error) => alert(error));
</script>
```

## Add static to Ladon

### As navigation entry

Add a custom `json` file into `_system/etc/ui/mind/mf-ladon-static-page/config/menu` with the following content

```json
{
	"label": "My First Static Page",
	"path": "path/to-static-page/module.html",
	"target": "static",
	"type": "main",
	"index": 10
}
```

For more information about the [config concepts read the full docs](ConfigConcepts.md)

### As public servlet

If you wish to access your static with a url you need to place it in your `_public` folder and rename `module.html` to `index.html`
Make sure to call your url with `index.html` at the end.

`https://myladon/public/my-static/index.html`


