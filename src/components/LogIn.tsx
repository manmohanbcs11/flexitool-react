import { AuthenticationDetails, CognitoUser, CognitoUserPool, IAuthenticationDetailsData, ICognitoUserData } from "amazon-cognito-identity-js";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/SignUp.css';

interface LogInProps {
  onLogIn: () => void;
  showAlert: (type: string, message: string) => void;
}

const LogIn: React.FC<LogInProps> = ({ onLogIn, showAlert }: LogInProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const COGNITO_USER_POOL_ID: string = process.env.REACT_APP_COGNITO_USER_POOL_ID || '';
  const COGNITO_CLIENT_ID: string = process.env.REACT_APP_COGNITO_CLIENT_ID || '';

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: ICognitoUserData = {
      Username: email,
      Pool: new CognitoUserPool({
        UserPoolId: COGNITO_USER_POOL_ID,
        ClientId: COGNITO_CLIENT_ID
      })
    };
    const user = new CognitoUser(userData);

    const authData: IAuthenticationDetailsData = {
      Username: email,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);

    user.authenticateUser(authDetails, {
      onSuccess: (result) => {
        onLogIn();
      },
      onFailure: (err) => {
        console.error(err);
        showAlert('danger', err.message);
      },
      newPasswordRequired: (data) => {
        console.log('newPasswordRequired: ', data);
      }
    });
  }

  return (
    <div className='signup-container'>
      <h2>Welcome to the FlexiTool</h2>
      <div className="form-container">
        <h4>Already have an account?</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="email" className="label-bold">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <label htmlFor="password" className="label-bold">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
        <div className="or-divider">OR</div>
        <NavLink className="nav-link btn btn-primary" style={{ backgroundColor: '#3366dd', padding: '10px' }} to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default LogIn;
