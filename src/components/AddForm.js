import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";

export default function AddForm(props) {
  const [name, setName] = useState('');
  const [descr, setDescr] = useState('');

  const projects = useSelector((state) => state);
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !descr) {
      return toast.warning('Please fill in all fields!')
    }
    const data = {
      id: projects[projects.length - 1].id + 1,
      name,
      descr
    }
    setName('')
    setDescr('')

    dispatch({type: 'ADD_PROJECT', payload: data})
    props.setModal(!props.modal)
  }

  const handleTimes = () => {
    props.setModal(!props.modal)
  }

  return(
    <div className="modal-s">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Project</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span onClick={handleTimes}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <label>Name: </label>
                <input
                  className={"form-control"}
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Project: </label>
                <input
                  className={"form-control"}
                  type="text"
                  placeholder="Description"
                  value={descr}
                  onChange={e => setDescr(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <input type="submit" value="Create Project" className="btn btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}