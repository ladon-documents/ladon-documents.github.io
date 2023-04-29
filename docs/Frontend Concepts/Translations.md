# Translations

## Concepts

+ Translations are used to serve the user a language hes familiar with and setup on the running system
+ Translations a simplified by using a `function` call which is provides by [mf-ladon-utility-api](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse)
+ Translations are store in `config/i18n/{your-language-code}.json`
+ Translation JSONs always wrap with your application name first. See [example](Translations.md#L17)
+ Applications should at least come with a `de.json` and `en.json`

## API

```javascript
translatePipeTransform(key: string, interpolations = undefined): string {}
````

## Example Translation file

```json
{
	"MY_AWESOME_APPLICATION": {
		"TITLE": "My awesome Application"
		...
	}
}
```
Store your translation files in `config/i18n` and name it with a proper [language-code](https://datatracker.ietf.org/doc/html/rfc5646)

## Usage

### Javascript

```javascript
let translate

System.import("@mind/mf-ladon-utility-api").then( (utility) => {
	translate = utility.translatePipeTransform	
})

const titleEl = document.querySelector('h1');
titelEl.innerText = translate('MY_AWESOME_APPLICATION.TITLE')
```

### Angular

In Angular we recommend to generate a pipe to handle this. Generate a pipe `translate.pipe.ts` and use the following example code

```javascript
import { translatePipeTransform } from '@mind/mf-ladon-utility-api';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string | null, interpolations?: string): string {
    if (value) {
      return translatePipeTransform(value, interpolations);
    }

    return value;
  }
}
```