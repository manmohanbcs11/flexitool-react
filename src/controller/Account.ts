import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession, IAuthenticationDetailsData, ICognitoUserData } from 'amazon-cognito-identity-js';

export class Account {


  async getSession(): Promise<CognitoUserSession | undefined> {
    const pool = new CognitoUserPool({
      UserPoolId: 'ap-south-1_eNLKq4RsU',
      ClientId: '4bpk6q1mtug24v8fgn2a8pj827'
    });
    const user = pool.getCurrentUser();

    if (user) {
      return new Promise<CognitoUserSession>((resolve, reject) => {
        user.getSession((err: any, session: CognitoUserSession) => {
          if (err) {
            console.error('Error while fetching the user session:', err);
            reject(err);
          } else {
            resolve(session);
          }
        });
      });
    } else {
      console.log('Account.getSession: No current user found.');
    }
  }


  async authenticate(Username: string, Password: string): Promise<void> {
    console.log('authenticate:', Username, Password);
    return new Promise<void>((resolve, reject) => {
      const userData: ICognitoUserData = {
        Username,
        Pool: new CognitoUserPool({
          UserPoolId: 'ap-south-1_eNLKq4RsU',
          ClientId: '4bpk6q1mtug24v8fgn2a8pj827'
        })
      };
      const user = new CognitoUser(userData);

      const authData: IAuthenticationDetailsData = { Username, Password };
      const authDetails = new AuthenticationDetails(authData);

      user.authenticateUser(authDetails, {
        onSuccess: (result: any) => {
          console.log('onSuccess:', result);
          resolve();
        },
        onFailure: (err) => {
          console.error('onFailure:', err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log('newPasswordRequired: ', data);
        }
      });
    });
  };
};
