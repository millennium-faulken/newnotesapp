import React, { Component } from "react";
import { getNote, deleteNote } from "../actions";
import { connect } from "react-redux";
import "./NoteView.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getNote(id);
    console.log(this.props.note.title)
    console.log(this.props)
  }

  render() {
    let modal = null;
    if (this.state.modal === true) {
      modal = (
        <div className="ModalContainer">
          <div className="ModalContainer__ContentContainer">
            <h2 className="sure">Are you sure you want to delete this?</h2>
            <div className="ModalContainer__ButtonsContainer">
              <Link to="/" className="link">
                <button
                  className="ModalContainer__Button ModalContainer__WrappedButton red"
                  onClick={() => {
                    this.props.deleteNote(this.props.note._id);
                    this.setState({ modal: !this.state.modal });
                  }}
                >
                  Delete
                </button>
              </Link>
              <button
                className="ModalContainer__Button"
                onClick={() => this.setState({ modal: !this.state.modal })}
              >
                No
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <NavBar />
        <div className="noteView">
          {modal}
          <div className="buttons">
            <button
              className="deleteButton"
              onClick={() => {
                this.setState({ modal: !this.state.modal });
              }}
            >
              delete
            </button>
          </div>
          <div className="oneTitle">{this.props.note.title}</div>
          <div className="oneContent">{this.props.note.content}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
    fetchNote: state.fetchNote,
    error: state.error,
    deletingNote: state.deletingNote
  };
};

export default connect(
  mapStateToProps,
  { getNote, deleteNote }
)(NoteView);
