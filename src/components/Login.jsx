import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../context/authContext';
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
  doSignInWithGithub,
  doSignInWithFacebook,
  doCreateUserWithEmailAndPassword
} from '../firebase/auth';

const SignIn = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Register state
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Toggle login/register form
  const [isActive, setIsActive] = useState(true);

  // Redirect if already logged in
  useEffect(() => {
    if (userLoggedIn) {
      navigate('/home');
    }
  }, [userLoggedIn, navigate]);

  // Login submit handler
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSignIn) {
      setIsSignIn(true);
      setErrorMessage('');
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate('/home');
      } catch (err) {
        setErrorMessage('Login failed. Please check your credentials.');
        console.error(err);
        setIsSignIn(false);
      }
    }
  };

  // Social login handlers
  const onGoogleSign = async (e) => {
    e.preventDefault();
    if (!isSignIn) {
      setIsSignIn(true);
      setErrorMessage('');
      try {
        await doSignInWithGoogle();
        navigate('/home');
      } catch (err) {
        setErrorMessage('Google sign-in failed.');
        console.error(err);
        setIsSignIn(false);
      }
    }
  };

  const onFacebookSign = async (e) => {
    e.preventDefault();
    if (!isSignIn) {
      setIsSignIn(true);
      setErrorMessage('');
      try {
        await doSignInWithFacebook();
        navigate('/home');
      } catch (err) {
        setErrorMessage('Facebook sign-in failed.');
        console.error(err);
        setIsSignIn(false);
      }
    }
  };

  const onGithubSign = async (e) => {
    e.preventDefault();
    if (!isSignIn) {
      setIsSignIn(true);
      setErrorMessage('');
      try {
        await doSignInWithGithub();
        navigate('/home');
      } catch (err) {
        setErrorMessage('GitHub sign-in failed.');
        console.error(err);
        setIsSignIn(false);
      }
    }
  };

  // Register submit handler
  const onRegister = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      setErrorMessage('');
      try {
        // You might want to save regUsername somewhere or update user profile later
        await doCreateUserWithEmailAndPassword(regEmail, regPassword);
        navigate('/home');
      } catch (err) {
        setErrorMessage('Registration failed. Please try again.');
        console.error(err);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      {/* Login form */}
      <div className="form-box login">
        <form onSubmit={onSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>
          <div className="forgot-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit" className="btn" disabled={isSignIn}>
            Login
          </button>
          <p>or login with social platforms</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="icons" onClick={onGoogleSign} />
            <FontAwesomeIcon icon={faFacebookF} className="icons" onClick={onFacebookSign} />
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
            <FontAwesomeIcon icon={faGithub} className="icons" onClick={onGithubSign} />
          </div>
        </form>
      </div>

      {/* Register form */}
      <div className="form-box register">
        <form onSubmit={onRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={regUsername}
              onChange={(e) => setRegUsername(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
          </div>
          <button type="submit" className="btn" disabled={isRegistering}>Register</button>
          <p>or register with social platforms</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="icons" />
            <FontAwesomeIcon icon={faFacebookF} className="icons" />
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account</p>
          <button className="btn register-btn" onClick={() => setIsActive(true)}>
            Register
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account</p>
          <button className="btn login-btn" onClick={() => setIsActive(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
