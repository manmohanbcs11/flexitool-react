import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails, ICognitoUserData, CognitoUserPool, IAuthenticationDetailsData } from "amazon-cognito-identity-js";
import './css/SignUp.css';

interface LogInProps {
  onLogIn: () => void;
  showAlert: (type: string, message: string) => void;
}

export default function LogIn(props: LogInProps) {
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
        props.onLogIn();
      },
      onFailure: (err) => {
        console.error(err);
        props.showAlert('danger', err.message);
      },
      newPasswordRequired: (data) => {
        console.log('newPasswordRequired: ', data);
      }
    })
  }


  return (

    <div className='signup-container'>
      <h3>Already have an account?</h3>
      <div className="form-container my-3">
        <form onSubmit={onSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
