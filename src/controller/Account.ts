import { AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserSession, IAuthenticationDetailsData, ICognitoUserData } from 'amazon-cognito-identity-js';
export class Account {
  COGNITO_USER_POOL_ID: string = process.env.REACT_APP_COGNITO_USER_POOL_ID || '';
  COGNITO_CLIENT_ID: string = process.env.REACT_APP_COGNITO_CLIENT_ID || '';

  async getSession(): Promise<CognitoUserSession | undefined> {
    const pool = new CognitoUserPool({
      UserPoolId: this.COGNITO_USER_POOL_ID,
      ClientId: this.COGNITO_CLIENT_ID
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
    return new Promise<void>((resolve, reject) => {
      const userData: ICognitoUserData = {
        Username,
        Pool: new CognitoUserPool({
          UserPoolId: this.COGNITO_USER_POOL_ID,
          ClientId: this.COGNITO_CLIENT_ID
        })
      };
      const user = new CognitoUser(userData);

      const authData: IAuthenticationDetailsData = { Username, Password };
      const authDetails = new AuthenticationDetails(authData);

      user.authenticateUser(authDetails, {
        onSuccess: (result: any) => {
          console.log('onSuccess:', result);
          resolve(result);
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
