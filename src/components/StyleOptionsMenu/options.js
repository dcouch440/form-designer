export const elementsButtons = [
  {
    set: 'input',
    buttonText: 'Inputs',
    canSet: true
  },
  {
    set: 'multipleChoice',
    buttonText: 'Multiple Choices',
    canSet: true
  },
  {
    set: 'page',
    buttonText: 'Page',
    canSet: true
  }
];

export const styleEffectButtons = styleEffect => [
  {
    set: 'nonHovered',
    buttonText: 'Default',
    canSet: true
  },
  {
    set: 'hovered',
    buttonText: 'Hovered',
    canSet: ['input'].includes(styleEffect)
  }
];

export const elementAttributeButtons = element => [
  {
    set: 'backgroundColor',
    // for backgroundColor give multiple choice a nice background for its container
    buttonText: 'Background',
    canSet: ['input', 'page'].includes(element)
  },
  {
    set: 'borderColor',
    buttonText: 'Border',
    // for multiple choice give the container a nice border
    canSet: ['input'].includes(element)
  },
  {
    set: 'color',
    buttonText: 'Text',
    // for multiple choice set title and options
    canSet: ['input', 'multipleChoice'].includes(element)
  }
];