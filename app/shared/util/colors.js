export const colors = {
  purple: '#884AF5',
  green: '#5ABD9F',
  blue: '#2B63F3',
  darkBlue: '#5535E9',
  lightGreen: '#57BECA'
}

export const colorsArray = [
  '#884AF5',
  '#5ABD9F',
  '#2B63F3',
  '#5535E9',
  '#57BECA'
]

export const randomColor = () => colorsArray[Math.floor(Math.random() * colorsArray.length)]
