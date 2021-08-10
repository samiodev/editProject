import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import {toast} from "react-toastify";

export default function Home(props) {
  const [modal, setModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const openModalHandler = () => {
    setModal(!modal)
  }

  const editModalHandler = (id) => {
    setEditModal(!editModal)
    props.history.push(`/edit/${id}`)
  }

  const deleteProject = (id) => {
    dispatch({type: 'DELETE_PROJECT', payload: id})
    toast.success('Project deleted succesfully')
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
          {editModal ? <EditForm /> : null}
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
                    <button className="btn" onClick={() => editModalHandler(project.id)}>Edit</button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteProject(project.id)}>
                      Delete
                    </button>
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