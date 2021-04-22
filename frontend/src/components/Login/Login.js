// import React, { Component } from 'react';
// import Axios from 'axios';
// import './Login.css';
// import HomePage from './components/HomePage';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//       input1Classes: 'input',
//       input2Classes: 'input',
//       buttonClasses: 'submit',
//       errorMessage: '',
//       authenticated: false,
//     }
//     this.storage = window.localStorage;
//   }

//   submit = route => {
//     const { username, password } = this.state;
//     if(username !== '' && password !== '') {
//       Axios.post(`http://localhost:3333/users/${route}`, {username, password})
//         .then(res => {
//           console.log(res.data);
//           this.setState({errorMessage: 'Successfully logged in', username: '', password: '', input1Classes: 'input', input2Classes: 'input' });
//           this.storage.setItem("justin", res.data.token);
//           this.props.fetchUsers(res.data.token);
//         })
//         .catch(err => {
//           console.log(err.message);
//           this.setState({errorMessage: 'Please try again' });
//         })
//     } else {
//       this.setState({ errorMessage: 'Username and Password are required' });
//     }
//   }

//   render = () => {
//     const { username, password, input1Classes, input2Classes, errorMessage, buttonClasses } = this.state;
//     return (
//       <div className='login'>
//         <h1>Login</h1>
//         {
//           errorMessage !== '' &&
//           <h2>{errorMessage}</h2>
//         }
//         <div className={input1Classes}>
//           <label htmlFor="username">Username:</label>
//           <input 
//             type='text'
//             id="username"
//             name='username'
//             value={username}
//             onChange={e => this.setState({username: e.target.value})}
//             onFocus={e => this.setState({input1Classes: 'input input-focus'})}
//             onBlur={e => {
//               if(username === '') this.setState({input1Classes: 'input'})
//             }} />
//         </div>
//         <div className={input2Classes}>
//           <label htmlFor="password">Password:</label>
//           <input 
//             type='password'
//             id='password'
//             name='password'
//             value={password}
//             onChange={e => this.setState({password: e.target.value})}
//             onFocus={e => this.setState({input2Classes: 'input input-focus'})}
//             onBlur={e => {
//               if(password === '') this.setState({input2Classes: 'input'})
//             }} />
//         </div>
//         <div className='buttons'>
//           <button 
//           onClick={() => this.submit('register')}
//           className={buttonClasses}>Sign Up</button>
//           <button 
//             onClick={() => this.submit(<HomePage />)
//             }
//             className={buttonClasses}>Login</button>
//         </div>
//       </div>
//     );
//   }
// }