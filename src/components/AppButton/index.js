import useAppStyles from '../../hooks/useAppStyles';

export default function AppButton ({ onClick, text, key }) {
  const { styles, ref } = useAppStyles({ element: 'button' });

  return (
    <button
      ref={ref}
      style={styles}
      onClick={onClick}
      key={key}
    >
      {text}
    </button>
  );
}
