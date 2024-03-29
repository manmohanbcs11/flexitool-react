import { CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './css/SignUp.css';

interface SignUpProps {
  onSignUp: () => void;
  showAlert: (type: string, message: string) => void;
}

export default function SignUp(props: SignUpProps) {
  const COGNITO_USER_POOL_ID: string = process.env.REACT_APP_COGNITO_USER_POOL_ID || '';
  const COGNITO_CLIENT_ID: string = process.env.REACT_APP_COGNITO_CLIENT_ID || '';
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cognitoPool = new CognitoUserPool({
      UserPoolId: COGNITO_USER_POOL_ID,
      ClientId: COGNITO_CLIENT_ID
    });

    const attribute = new CognitoUserAttribute({ Name: 'name', Value: name });
    cognitoPool.signUp(email, password, [attribute], [], (err, data) => {
      if (err) {
        console.error(err);
        props.showAlert('danger', err.message);
      } else {
        props.onSignUp();
        navigate('/');
        props.showAlert('success', 'User successfully registered, please check email and verify the link to continue.');
      }
    });
  }


  return (
    <div className='signup-container'>
      <div className="form-container my-3">
        <h3>Welcome to the FlexiTool</h3>
        <form onSubmit={onSubmit}>
          <label htmlFor="name" className="label-bold">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
          <label htmlFor="email" className="label-bold">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
          <label htmlFor="password" className="label-bold">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="or-divider">OR</div>
        <NavLink className="nav-link btn btn-primary" style={{ backgroundColor: '#3366dd', padding: '10px' }} to="/">Log In</NavLink>
      </div>
    </div>
  );
}

