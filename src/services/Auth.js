/**
 * A class use to authenticate a user using your prefered authentication method.
 */
class Auth {
  /**
   * @param {boolean} flag
   * @returns
   *
   *  Returns truety value if the user is authenticated, or a  falsey value if they are not.
   */
  isLoggedIn = (flag = false) => {
    return flag;
  };
  /**
   *
   * @param { {email: string, password:string} } credentials
   * @param {boolean} flag
   * @returns Promise
   *
   * Return true if user login was successful, or false if they were not.
   * Flag is use for testing and should not be used in production.
   */
  login = ({ email, password }, flag = false) => {
    return new Promise(async (resolve, reject) => {
      // add your authentication method here

      resolve(flag);
    });
  };
  logout = () => {
    return new Promise(async (resolve, reject) => {
      //add your logout method here
      resolve(true);
    });
  };
}
export default Auth;
