function CreateArea(props) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={props.newTitle}
          onChange={props.onchange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.newContent}
          onChange={props.onchange}
        />
        <button onClick={props.onSubmit}>Add</button>
      </form>
    </>
  );
}

export default CreateArea;
