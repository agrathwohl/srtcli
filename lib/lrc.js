function lrc2srt(lrc) {
  function parseLine(line) {
    const lineSplit = line.split(']')
    const lineTime = lineSplit[0].replace('[','').replace('.',',')
    const lineLyric = lineSplit[1].trim()
    return [lineTime, lineLyric]
  }

  const lrcSplit = lrc.split('\n')
  lrcSplit.pop()

  let counter = 0
  let lyricsStr = ''
  while (counter < lrcSplit.length - 2) {
    const [time0, lyric0] = parseLine(lrcSplit[counter])
    counter += 1
    const [time1] = parseLine(lrcSplit[counter])
    lyricsStr += `${counter}
00:${time0} --> 00:${time1}
${lyric0}
`
  }
  return lyricsStr
}

module.exports = lrc2srt
