import removeIcon from "../../../assets/icons/removeIcon.png";
import editIcon from "../../../assets/icons/editIcon.png";
import React from "react";

function Table({ data, removeFunc, editFunc }) {
  return (
    <ul className="responsive-table">
      <li className="table-header">
        <div className="col col-2">Заголовок</div>
        <div className="col col-3">Редактировать</div>
        <div className="col col-4">Удалить</div>
      </li>
      <li className="table-row">
        {data &&
          Array.isArray(data) &&
          data.map((o) => {
            return (
              <React.Fragment key={o.id}>
                <div className="col col-2" data-label="Customer Name">
                  {o.title}
                </div>
                <div className="col col-3" data-label="Amount">
                  <a style={{ cursor: "pointer" }} onClick={editFunc}>
                    <img
                      style={{ width: "20px" }}
                      src={editIcon}
                      alt="Иконка редактирования"
                    />
                  </a>
                </div>
                <div className="col col-4" data-label="Payment Status">
                  <a style={{ cursor: "pointer" }} onClick={removeFunc}>
                    <img
                      style={{ width: "30px" }}
                      src={removeIcon}
                      alt="Иконка удаления"
                    />
                  </a>
                </div>
              </React.Fragment>
            );
          })}
      </li>
    </ul>
  );
}

export default Table;
