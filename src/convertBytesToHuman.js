/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function bytesToHumanDecorator(){
  const postfix = [' PB', ' TB', ' GB', ' MB', ' KB', ' B']
  let bytesNumber = []
  let num = 1
  for (let i = 0; i < postfix.length; i+=1){
    bytesNumber.push(num)
    num *= 1024
  }
  bytesNumber = bytesNumber.reverse()

  return function func(bytes){
    let i = 0
    for (; i < bytesNumber.length - 1; i+=1)
      if (bytes >= bytesNumber[i]){
        let converted = bytes / bytesNumber[i]
        const trunced = Math.trunc(converted)
        converted = ((converted - trunced) < 1e-2)
          ? trunced
          : (Math.floor(converted * 100) / 100).toFixed(2)
        return String(converted) + postfix[i]
      }
    return String(bytes) + postfix[i]
  }
}

const convert = bytesToHumanDecorator()

export default function convertBytesToHuman(bytes) {
  if( (typeof(bytes) != 'number')
    || !Number.isInteger(bytes)
    || bytes === null
    || bytes < 0)
    return false
  return convert(bytes)
}

