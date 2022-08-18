import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged, signOut } from "firebase/auth";

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

  isLoggedIn = () => {
    const auth = getAuth();
    const user = auth.currentUser;
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
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((credentials) => resolve(credentials.user))
        .catch((error) => reject(error));
    });
  };
  logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const auth = getAuth();
        await signOut(auth);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };
  onChange = (cb) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) return cb(user);
      cb(null);
    });
  };
}
export default Auth;
