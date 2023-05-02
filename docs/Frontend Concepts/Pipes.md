# Pipes

## Concepts

+ Pipes are helper functions which are provides by [mf-ladon-utility-api](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse)
+ Provided by utility ensures code a stable and reusable

## Alias Pipe

#### Usage

```javascript
import { aliasPipeTransform } from '@mind/mf-ladon-utility-api'
aliasPipeTransform("Max Mustermann")
# Returns "MM"
```

See [full code here](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse/src/pipes/alias.pipe.ts)

## File Icon Pipe

#### Usage

```javascript
import { fileiconPipeTransform } from '@mind/mf-ladon-utility-api'
const fileicon = fileiconPipeTransform("https://my-ladon/ui/assets/tester.pdf")
document.querySelector('img').src = fileicon
```

See [full code here](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse/src/pipes/fileicon.pipe.ts)

## File Name Pipe

#### Usage

```javascript
import { filenamePipeTransform } from '@mind/mf-ladon-utility-api'
filenamePipeTransform("https://my-ladon/ui/assets/tester.pdf")
```

See [full code here](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse/src/pipes/filename.pipe.ts)

## File Size Pipe

#### Usage

```javascript
import { filesizePipeTransform } from '@mind/mf-ladon-utility-api'
filesizePipeTransform(12000)
# Returns "12 MB"
```

See [full code here](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse/src/pipes/filesize.pipe.ts)

## Translate Pipe

The pipe translates to desired language code. For a detailed documentation see [Translations](Translations.md)

#### Usage

```javascript
import { translatePipeTransform } from '@mind/mf-ladon-utility-api'
translatePipeTransform("MY_AWESOME_APPLICATION.TITLE")
# Returns "A translated title string"
```

See [full code here](https://vcs.mind-consulting.de/projects/MIN/repos/mf-ladon-utility-api/browse/src/pipes/translate.pipe.ts)
