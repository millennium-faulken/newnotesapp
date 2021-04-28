import React, { Component } from 'react';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import './NotesList.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

class NotesList extends Component {
  state = {
    title: '',
    content: ''
  };

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log(this.props, "noteslist")
    return (
      <div>
        <NavBar />
        <div className="listing">
        {this.props.notes.map(note => 
          <Link to={`/note/${note._id}`} key={note._id} className="noteList">
            <div className="noteTitle">{note.title}</div>
            <div className="divide"></div>
            <div className="noteContent">{note.content}</div>
          </Link>)}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
    error: state.error
  };
};

export default connect(mapStateToProps, { getNotes })(NotesList);
