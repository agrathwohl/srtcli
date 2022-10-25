import boxen from 'boxen'
import Enquirer from 'enquirer'
import fs from 'fs'

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
