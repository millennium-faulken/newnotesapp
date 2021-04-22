import React, { Component } from 'react';
import './Users.css';

export default class Users extends Component {
  render = () => {
  	const { users, logout } = this.props;
    return (
      <div className='users'>
      	<button onClick={logout}>Logout</button>
      	<div>
      		{
      			users.map(user => {
      				const { _id, username } = user;
      				return (
      					<div className="user" key={_id}>{username}</div>
      				);
      			})
      		}
      	</div>
      </div>
    );
  }
}