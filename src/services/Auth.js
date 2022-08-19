import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";

/**
 * A class use to authenticate a user using your prefered authentication method.
 */
class Auth {
  constructor() {
    this.auth = getAuth();
  }
  /**
   * @returns
   *
   *  Returns truety value if the user is authenticated, or a  falsey value if they are not.
   */

  isLoggedIn = () => {
    const user = this.auth.currentUser;
    console.log(user);
    if (user) return true;
    return false;
  };
  /**
   *
   * @param { {email: string, password:string} } credentials
   * @param {boolean} flag
   * @returns Promise
   *
   * Return true if user login was successful, or false if they were not.
   */

  login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      const auth = this.auth;
      signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => resolve(credentials.user))
        .catch((error) => reject(error));
    });
  };
  logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const auth = this.auth;
        await signOut(auth);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  onChange = (cb) => {
    const auth = this.auth;
    onAuthStateChanged(auth, (user) => {
      if (user) return cb(user);
      cb(null);
    });
  };
}
export default Auth;
