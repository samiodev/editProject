import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import Home from "./Home";

export default function EditForm(props) {
  const [name, setName] = useState('');
  const [descr, setDescr] = useState('');

  const {id} = useParams()

  const projects = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  const currentProject = projects.find(project => project.id === parseInt(id))

  useEffect(() => {
    if(currentProject) {
      setName(currentProject.name);
      setDescr(currentProject.descr);
    }
  }, [currentProject])

  const handleSubmit = e => {
    e.preventDefault()
    const data = {
      id: parseInt(id),
      name,
      descr
    }

    dispatch({type: 'UPDATE_PROJECT', payload: data})
    toast.success('Project updated succsefully')
    history.push('/')
  }

  return(
    <>
      <div className="modal-s">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {currentProject ? (
                <h5 className="modal-title">Edit Project {id}</h5>
              ) : (
                <h5 className="modal-title">Contact with id {id} not exists</h5>
              )}
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <Link to="/">
                  <span>&times;</span>
                </Link>
              </button>
            </div>
            <div className="modal-body">
              {currentProject ? (
                <form onSubmit={handleSubmit} className="form-group">
                  <div>
                    <label>Name: </label>
                    <input
                      className={"form-control"}
                      type="text"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Project: </label>
                    <input
                      className={"form-control"}
                      type="text"
                      placeholder="Description"
                      value={descr}
                      onChange={(e) => setDescr(e.target.value)}
                    />
                  </div>
                  <div className="modal-footer">
                    <input type="submit" value="Update Project" className="btn btn-success" />
                    <Link to="/" className="btn btn-outline-danger mr-3">
                      Cancel
                    </Link>
                  </div>
                </form>
              ) : (
                <form className="form-group">
                  <div>
                    <label>Name: </label>
                    <input disabled className={"form-control"} type="text" placeholder="Enter your Name"/>
                  </div>
                  <div>
                    <label>Project: </label>
                    <input disabled className={"form-control"} type="text" placeholder="Description"/>
                  </div>
                  <div className="modal-footer">
                    <input type="submit" disabled value="Update Project" className="btn btn-success" />
                    <Link to="/" className="btn btn-outline-danger mr-3">
                      Cancel
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Home />
    </>
  )
}