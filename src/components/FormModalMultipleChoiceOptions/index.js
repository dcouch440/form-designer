import {
  AddButton,
  RemoveButton,
  OptionsListItem
} from './styles';

export default function FormModalMultipleChoiceOptions ({
  optionsArrayInput,
  setOptionsArray,
  setOptionsArrayInput,
  optionsArray,
  mainInputTitle,
  handleTitleChange
}) {

  const handleAddChoice = () => {
    setOptionsArray(prev => [...(new Set([...prev, optionsArrayInput]))]);
    setOptionsArrayInput('');
  };
  const handleRemoveChoice = option => {
    setOptionsArray(optionsArray.filter(o => option !== o));
  };
  const handleOptionInputChange = e => {
    const { value } = e.target;
    setOptionsArrayInput(value);
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
      value={optionsArrayInput}
    />
    <AddButton onClick={handleAddChoice}>Add</AddButton>
    {
      optionsArray.map(option => (
        <OptionsListItem>
          { option }
          <RemoveButton onClick={() => handleRemoveChoice(option)}>X</RemoveButton>
        </OptionsListItem>
      ))
    }
  </>;
}
