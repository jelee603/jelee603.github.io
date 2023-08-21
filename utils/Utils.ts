export const getLabelColor = (name: string) => {
  let backgroundColor;
  let color = 'black';
  switch (name) {
    case 'react': {
      backgroundColor = '#61dafa';
      break;
    }
    case 'vue': {
      backgroundColor = '#4fc08d';
      break;
    }
    case 'html5': {
      backgroundColor = '#e25026';
      color = 'white';
      break;
    }
    case 'spring': {
      backgroundColor = '#46cc12';
      color = 'white';
      break;
    }
    case 'asp.net': {
      backgroundColor = '#dcd5f5';
      color = 'black';
      break;
    }
  }

  return { backgroundColor, color };
};
