export default function FormModalInputOptions ({ mainInputTitle, handleTitleChange }) {
  return (
    <>
      <h3>
        { mainInputTitle }
      </h3>
      <input
        name='title'
        onChange={handleTitleChange}
      />
    </>
  );
}
