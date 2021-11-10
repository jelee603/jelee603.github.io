const fontColor = {
  black: '#61dafb',
  green: '#ffffff',
  yellow: '#000000',
  pink: '#ffffff',
  blue: '#ffffff',
};

const bgColor = {
  black: '#000000',
  green: '#42b983',
  yellow: '#ffcc00',
  pink: '#db7093',
  blue: '#3178c6',
};

function getColors(colorName) {
  return [bgColor[colorName], fontColor[colorName]];
}

export default getColors;
// module.exports = getColors;
