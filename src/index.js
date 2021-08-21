const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  '     ': ' ',
};
const DEMORSE_TABLE = {
  '10': '.',
  '11': '-',
  '**': ' ',
  '00': '',
};

function decode(expr) {
  let A = expr.match(/.{1,10}/g);

  let textMorse = A

  for (let i = 0; i < textMorse.length; i++) {
    let sign = textMorse[i].match(/.{1,2}/g)

    for (let j = 0; j < sign.length; j++) {
      sign[j] = DEMORSE_TABLE[sign[j]]
    }
    textMorse[i] = sign.join('')
  }

  let textDeMorse = textMorse

  for (let i = 0; i < textDeMorse.length; i++) {
    textDeMorse[i] = MORSE_TABLE[textDeMorse[i]]
  }

  console.log(textDeMorse.join(''))
  return textDeMorse.join('')

}

module.exports = {
  decode
}