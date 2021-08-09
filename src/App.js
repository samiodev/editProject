import React from "react";
import {ToastContainer} from "react-toastify";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";

export default function App() {
  return(
    <div className="App">
      <ToastContainer />
      <Navbar />
      <SideBar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/add">
          <AddForm />
        </Route>
        <Route path="/edit/:id">
          <EditForm />
        </Route>
      </Switch>
    </div>
  )
}