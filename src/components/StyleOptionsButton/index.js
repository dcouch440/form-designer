import {
  ButtonGrid,
  SelectionButton
} from './styles';

export default function StyleOptionsButton ({
  elementTypes,
  onClick,
  span,
  activeButton,
  slim,
  columns
}) {

  const renderButtonsWithRules = () => {
    const ifSet = ({ can, cant, canSet }) => canSet ? can : cant;

    return (
      elementTypes.map(({ set, buttonText, canSet }, index) => {
        const isActive = set === activeButton;
        const checkIfPageText = ifSet({ can: buttonText, cant: 'Cannot Set', canSet });

        return (
          <SelectionButton
            key={index}
            span={span}
            isActive={isActive}
            slim={slim}
            onClick={() => onClick(set)}
          >
            { checkIfPageText }
          </SelectionButton>
        );
      })
    );
  };

  return (
    <ButtonGrid
      columns={columns}
    >
      { renderButtonsWithRules() }
    </ButtonGrid>
  );
}
