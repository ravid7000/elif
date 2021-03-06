function getDirName(path: string) {
  if (!path) {
    throw new Error('Invalid dir name or path')
  }
  return path.substr(path.lastIndexOf('/') + 1)
}

const fileToGenerate = [
  'mod.ts',
  'mod.test.ts',
  'mod.js',
  'mod.test.js',
  'README.md',
]

const getReadmeContent = (dirName: string, dirPath: string) =>
  [
    `# ${dirName} Util`,
    '\n',
    'Use with Typescript',
    '\n',
    '```js\n',
    `import { ${dirName} } from "https://raw.githubusercontent.com/ravid7000/elif/master/${dirPath}/mod.ts"\n\n`,
    '```\n\n',
    'Use with Javascript\n',
    '```html\n',
    `<script src="https://raw.githubusercontent.com/ravid7000/elif/master/${dirPath}/script.js"></script>\n`,
    '<script>\n',
    '</script>\n',
    '```\n',
  ].join('')

const getTestsContent = (dirName: string) =>
  [
    `import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'\n`,
    `import { ${dirName} } from './mod.ts'\n\n`,
    `Deno.test('${dirName}: tests', () => {\n`,
    '})',
  ].join('')

const tsIgnoreCheck = '// @ts-nocheck'

const encoder = new TextEncoder()

const dirPath = Deno.args[0]

if (!dirPath) {
  throw new Error('Dir path/name is required')
}

const dirName = getDirName(dirPath)

await Deno.mkdir(dirPath, { recursive: true })

for await (let file of fileToGenerate) {
  let content = ''
  if (file === 'README.md') {
    content = getReadmeContent(dirName, dirPath)
  }
  if (file === 'mod.test.ts') {
    content = getTestsContent(dirName)
  }
  if (file === 'mod.js' || file === 'mod.test.js') {
    content = tsIgnoreCheck
  }
  await Deno.writeFile(dirPath + '/' + file, encoder.encode(content))
}

console.log('Done!!!', dirPath)
