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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmit login');

    const userData: ICognitoUserData = {
      Username: email,
      Pool: new CognitoUserPool({
        UserPoolId: 'ap-south-1_eNLKq4RsU',
        ClientId: '4bpk6q1mtug24v8fgn2a8pj827'
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
        console.log('onSuccess login');
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
      <div className="form-container">
        <h3>Already have an account?</h3>
        <form onSubmit={onSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
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
