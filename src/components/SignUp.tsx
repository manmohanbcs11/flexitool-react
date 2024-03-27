import { CognitoUserPool } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './css/SignUp.css';

interface SignUpProps {
  onSignUp: () => void;
  showAlert: (type: string, message: string) => void;
}

export default function SignUp(props: SignUpProps) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cognitoPool = new CognitoUserPool({
      UserPoolId: 'ap-south-1_eNLKq4RsU',
      ClientId: '4bpk6q1mtug24v8fgn2a8pj827'
    });

    cognitoPool.signUp(email, password, [], [], (err, data) => {
      if (err) {
        console.error(err);
        props.showAlert('danger', err.message);
      } else {
        console.log(data);
        props.onSignUp();
        navigate('/signup');
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

