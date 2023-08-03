import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  }

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordStrong = password.length >= 8;

  return (
    <div className="container mt-4">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`form-control ${isEmailValid ? 'is-valid' : 'is-invalid'}`}
        />
        <div className="valid-feedback">You typed a valid email!</div>
        <div className="invalid-feedback">Please enter a valid email.</div>
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={`form-control ${isPasswordStrong ? 'is-valid' : 'is-invalid'}`}
        />
        <div className="valid-feedback">Strong password!</div>
        <div className="invalid-feedback">Your password is too weak.</div>
      </div>
      <div className="form-group">
        <label>Nationality:</label>
        <select
          value={nationality}
          onChange={handleNationalityChange}
          className="form-control"
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div>
        <p>
          {nationality === 'en'
            ? 'Hello'
            : nationality === 'de'
            ? 'Hallo'
            : nationality === 'fr'
            ? 'Bonjour'
            : ''}
        </p>
      </div>
      <div>
        <p>Your email is {email}</p>
      </div>
    </div>
  );
};

export default SignupPage;