// import React, { Component } from 'react';
// import Axios from 'axios';
// import Login from './Login/Login';
// import Users from './Users/Users';
// import './Users/Users.css';
// import './Login/Login.css';
// import HomePage from './HomePage';


// export default class LoginPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     }
//     this.storage = window.localStorage;
//   }

//   componentDidMount = () => {
//     const token = this.storage.getItem("justin");
//     if(token) 
//     return <HomePage />;
//   }

//   fetchUsers = token => {
//     const config = { headers: { "Authorization": `Bearer ${token}` } };
//     Axios.get(`http://localhost:3333/users/`, config)
//       .then(res => {
//         console.log(res);
//         if('data' in res){
//           this.setState({users: res.data});
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         this.setState({authenticated: false})
//       });
//   }

//   logout = () => {
//     this.storage.removeItem("justin");
//     this.setState({ users: [] });
//   }

//   render = () => {
//     const { users } = this.state;
//     return (
//       <div className="App">
//       {
//         users.length === 0 ?
//           <Login 
//           return HomePage />
//         :
//           <Users 
//             logout={this.logout}
//             users={users} />
//       }
//       </div>
//     );
//   }
// }