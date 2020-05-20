# arrayLoop Util

ArrayLoop works as both `Array.map` and `Array.forEach`. If you returned something other than undefined in callback that will put at perticular index in array. It will always return new array.

Use with Typescript

```js
import { arrayLoop } from 'https://raw.githubusercontent.com/ravid7000/elif/master/array/arrayLoop/mod.ts'

const input = [1, 2, 3, 4, 5]
const results = arrayLoop(input, (elm) => {
  if (elm % 2 === 0) {
    return elm * 2
  }
})

console.log(results) // [1, 4, 3, 8, 5]
```

Use with Javascript

```html
<script src="https://raw.githubusercontent.com/ravid7000/elif/master/array/arrayLoop/script.js"></script>
<script>
  var input = [1, 2, 3, 4, 5]
  var results = arrayLoop(input, (elm) => {
    if (elm % 2 === 0) {
      return elm * 2
    }
  })

  console.log(results) // [1, 4, 3, 8, 5]
</script>
```
