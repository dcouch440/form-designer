const shared = {
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '#000000',
  backgroundColor: '#FFFFFF',
  borderRadius: '7px',
  color: '#000000',
};

const defaultStyles = {
  button: {
    nonHovered: {
      ...shared,
      transition: '0.2s',
      cursor: 'pointer',
      width: '150px',
      borderRadius: '7px',
      padding: '30px',
    },
    hovered: {
      backgroundColor: '#000000',
      color: '#FFFFFF'
    }
  },
  multipleChoice: {
    nonHovered: {
    },
    hovered: {
      color: '#000000'
    }
  },
  page: {
    nonHovered: {
      backgroundColor: '#FFFFFF'
    },
    hovered: {
    },
  },
  input: {
    nonHovered: {
      ...shared,
      padding: '5px',
      borderRadius: '5px',
      width: '250px',
      height: '30px',
    },
    hovered: {
    }
  }
};

export default defaultStyles;