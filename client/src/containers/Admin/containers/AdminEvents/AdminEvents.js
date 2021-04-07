import React from "react";
import Table from "../../../../components/UI/Table/Table";
import SunEditor from "suneditor-react";
import Modalka from "../../../../components/UI/Modal/Modalka";
import { sunEditorButtonsList } from "../../../../config/suneditor";

function AdminEvents() {
  const [state, setState] = React.useState({
    title: "",
    description: "",
    image: "",
    typeModel: "story",
    isPublished: false,
  });
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const onChangeEditor = (editorContent) => {
    setState((prevState) => ({
      ...prevState,
      description: editorContent,
    }));
  };
  return (
    <div style={{ width: "70%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ display: "inline-block", paddingBottom: "0" }}>
          Список событий
        </h2>
        <button
          onClick={openModal}
          className="btn blue"
          style={{ display: "inline" }}
        >
          Добавить
        </button>
      </div>
      <Modalka modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <SunEditor
          // id="article-description"
          height="100"
          setDefaultStyle={"position: !important"}
          setOptions={{
            // height: 450,
            minHeight: 300,
            // maxHeight: 600,
            buttonList: sunEditorButtonsList,
          }}
          onChange={onChangeEditor}
          setContents={state.description}
          value={state.description}
        />
      </Modalka>
      <Table data={[{ title: "uluk" }]} />
    </div>
  );
}

export default AdminEvents;
