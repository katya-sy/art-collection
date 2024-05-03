export const FileInput = ({ files, setFiles, ...props }) => {
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFiles([]);
      return;
    }

    console.log(e.target.files);
    setFiles([...files, ...e.target.files]);
    console.log(files);
  };

  return (
    <>
      <label>
        <input {...props} onChange={onSelectFile} type="file" />
        <p className="label-text">Добавить изображение</p>
        <p
          className="label-text-mini"
          style={{ position: "absolute", left: 5, bottom: 2 }}
        >
          Добавлено изображений: {files.length}
        </p>
      </label>
    </>
  );
};
