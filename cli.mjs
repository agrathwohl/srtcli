import boxen from 'boxen'
import Enquirer from 'enquirer'
import fs from 'fs'
import lrc2srt from './lib/lrc.js'

const { prompt } = Enquirer

console.log(
  boxen(
    'srtcli',
    {
      borderStyle:'double',
      title:'@agrathwohl',
      titleAlignment: 'center',
      padding: 1,
      margin: 1,
      borderColor: 'yellow',
      float: 'center'
    }
  )
)

const response = await prompt({
  type: 'input',
  name: 'inputFile',
  message: 'What is your input file?'
})

const { inputFile } = response

const inputText = `${fs.readFileSync(inputFile)}`.trim()

console.log(inputText)

const response2 = await prompt({
  type: 'input',
  name: 'confirmLrc',
  message: 'Does this look right? Press any key to confirm. Ctrl+C to escape.'
})

const {confirmLrc} = response2

const lrcConv = lrc2srt(inputText)

console.log(lrcConv)

const response3 = await prompt({
  type: 'input',
  name: 'confirmLrcConv',
  message: 'Does this LRC look good? If so give it a file name:'
})

fs.writeFileSync(response3.confirmLrcConv, lrcConv)

console.log('DONE!')
