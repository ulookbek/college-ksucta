import SunEditor from "suneditor-react";
import React from "react";
import Modalka from "../../../../components/UI/Modal/Modalka";
import { sunEditorButtonsList } from "../../../../config/suneditor";
import Table from "../../../../components/UI/Table/Table";

function AdminNews() {
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
    <>
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
          <h1 className="text-center">Добавить новость</h1>
          <fieldset
            style={{
              border: "1px solid #7e8798",
              borderRadius: "10px",
              maxWidth: "100%",
              margin: "auto",
            }}
            className="from"
          >
            <input
              className="form formField"
              placeholder="Заголовок..."
              type="text"
            />
          </fieldset>
          <br />
          <SunEditor
            id="article-description"
            height="100%"
            setOptions={{
              height: 450,
              minHeight: 300,
              maxHeight: 600,
              buttonList: sunEditorButtonsList,
            }}
            onChange={onChangeEditor}
            setContents={state.description}
            value={state.description}
          />
          <br />
          <div className="text-center">
            <button className="btn blue">Войти</button>
          </div>
        </Modalka>
        <Table
          data={[{ title: "uluk", id: 123 }]}
          removeFunc={() => {
            return window.confirm("Вы точно хотите удалить?");
          }}
          editFunc={() => {
            return window.confirm("Вы точно хотите редактировать?");
          }}
        />
      </div>
    </>
  );
}

export default AdminNews;
