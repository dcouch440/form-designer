import {
  AddButton,
  RemoveButton,
  OptionsListItem
} from './styles';

export default function FormModalMultipleChoiceOptions ({
  optionsInput,
  setOptions,
  setOptionsInput,
  options,
  mainInputTitle,
  handleTitleChange
}) {

  const handleAddChoice = () => {
    setOptions(prev => [...(new Set([...prev, optionsInput]))]);
    setOptionsInput('');
  };
  const handleRemoveChoice = option => {
    setOptions(options.filter(o => option !== o));
  };
  const handleOptionInputChange = e => {
    const { value } = e.target;
    setOptionsInput(value);
  };

  return <>
    <h3>
      { mainInputTitle }
    </h3>
    <input
      name='title'
      onChange={handleTitleChange}
    />
    <h3>
      Add an option
    </h3>
    <input
      name='options'
      onChange={handleOptionInputChange}
      value={optionsInput}
    />
    <AddButton onClick={handleAddChoice}>Add</AddButton>
    {
      options.map(option => (
        <OptionsListItem>
          { option }
          <RemoveButton onClick={() => handleRemoveChoice(option)}>X</RemoveButton>
        </OptionsListItem>
      ))
    }
  </>;
}
