// function runFsm() {
export function runFsm() {
  const str = '1ab23'

  let i = 0,
    res: boolean = false
  const len = str.length
  while (true) {
    if (i >= len) break

    console.log('[]111111:')
    const char = str[i]
    if (char == 'a') {
      return (res = true)
    }

    ++i
  }

  return false
}
