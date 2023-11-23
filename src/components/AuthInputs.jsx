import { useState } from 'react';
import { styled } from "styled-components"
// import Button from "./Button.jsx"

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  // console.log(emailNotValid);
 

  //Styled Components 
  //Not working properly
  // const StyleLabel = styled.label` //To use replace label tag Label
  //   color : ${({$dynamic}) => $dynamic ? '#f87171' : '#d1d5db'}
  // `;
  // //Not working properly
  // const StyleInput = styled.input` //To use replace label tag Label
  //   background-color : ${({$invalid})=> $invalid ? "#fed2d2" :"#d1d5db"}
  // `

  const StyleButton =styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover{
    background-color: #f0920e;
  }
  `
  return (
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700  to-stone-800'>
      <div className="controls" >
        <p>
          <label className={`label ${passwordNotValid ? 'invalid' : undefined}`}>Email</label>
          <input
            // $invalid={emailNotValid}
            type="email"
            style={{
              backgroundColor : emailNotValid ? "#fed2d2" :"#d1d5db"
            }}
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${passwordNotValid ? 'invalid' : undefined}`}>Password</label>
          <input
            type="password"
            style={{
              backgroundColor : passwordNotValid ? "#fed2d2" :"#d1d5db"
            }}
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <StyleButton className='button' onClick={handleLogin}>Sign In</StyleButton>
      </div>
    </div>
  );
}
