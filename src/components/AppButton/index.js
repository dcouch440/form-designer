import useAppStyles from '../../hooks/useAppStyles';

export default function AppButton ({ onClick, text }) {
  const { styles, ref } = useAppStyles({ element: 'button' })

  return (
    <button
      ref={ref}
      style={styles}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
