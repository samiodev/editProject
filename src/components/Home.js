import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import AddForm from "./AddForm";
import EditForm from "./EditForm";

export default function Home() {
  const [modal, setModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)

  const openModalHandler = () => {
    setModal(!modal)
  }
  const openUpdateModalHandler = () => {
    setUpdateModal(!updateModal)
  }

  const projects = useSelector(state => state)

  return(
    <div className={"container"}>
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <button
            onClick={openModalHandler}
            className="btn btn-primary mb-3">
            Add Project
          </button>
          {modal ? <AddForm setModal={setModal} modal={modal} /> : null}
          {updateModal ? <EditForm/> : null}
          <div className="col-md-8 mx-auto">
            <table className="table table-hover text-center">
              <thead className="table table-hover bg-dark text-white">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Descr</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {projects.map((project, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{project.name}</td>
                  <td>{project.descr}</td>
                  <td>
                    <Link
                      to={`/edit/${project.id}`}
                      className="btn btn-small btn-primary">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}