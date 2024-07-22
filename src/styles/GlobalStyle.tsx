import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-color: #eef5ff;
    --primary-color: #282828;
    --secondary-color: #5b5b6c;
    --tertiary-color: #dfe5ee;
    --text-color: #ffffff;
    --accent-color: #414ded;

    font-family: 'Manrope', sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: var(--primary-color);
    background-color: var(--background-color);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  body {
    margin: 0;
    display: flex;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* ----------Get Started Page---------- */

  .get-started-container,
  .auth-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 64px;
  }

  .get-started-logo-container,
  .get-started-image-container,
  .get-started-content-container,
  .get-started-button-container,
  .auth-logo-container,
  .auth-image-container,
  .login-header-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }

  .get-started-image-container img,
  .get-started-logo-container img,
  .auth-logo-container img,
  .auth-image-container img {
    max-width: 100%;
  }

  .get-started-content-container {
    display: flex;
    flex-direction: column;
  }

  .get-started-content-paragraph {
    padding-top: 16px;
  }

  .get-started-content-paragraph p {
    color: var(--secondary-color);
  }

  .get-started-content-header h1,
  .login-header-content h1 {
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    color: var(--primary-color);
  }

  .get-started-content-paragraph p {
    font-size: 16px;
    font-weight: 500;
  }

  .get-started-button-container button {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    background-color: #282828;
    min-width: 300px;
    border-radius: 100px;
  }

  /* ----------Authentication Pages---------- */

  .auth-container {
    padding-bottom: 0;
    justify-content: space-between;
  }

  .auth-form-container {
    height: fit-content;
    max-width: 800px;
    background-color: var(--text-color);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }

  .input-with-label,
  .input-with-label-div {
    display: flex;
    flex-direction: column;
  }

  .input-with-label label,
  .input-with-label-div label,
  .input-with-label-otp label {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 4px;
  }

  .input-with-label input,
  .input-with-label-div input {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 4px;
    padding: 12px;
    min-width: 300px;
    background-color: var(--text-color);
    border-radius: 6px;
    border: 2px solid var(--tertiary-color);
    outline: none;
    color: var(--primary-color);
    margin-bottom: 16px;
  }

  .input-with-label input::placeholder,
  .input-with-label-div input::placeholder {
    color: var(--secondary-color);
  }

  .input-with-label input:focus,
  .input-with-label-div input:focus {
    border: 2px solid var(--accent-color);
  }

  .auth-form-forgot-anchor-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .auth-form-forgot-anchor-container a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: var(--primary-color);
  }

  .auth-form-forgot-anchor-container a span {
    font-size: 14px;
    font-weight: 700;
    color: var(--tertiary-color);
  }

  .formButton:hover {
    background-color: #f5b640;
  }

  .auth-form-button-div {
    padding: 32px 0;
  }

  .input-with-label-and-button {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .input-button-container {
    display: flex;
    height: max-content;
    justify-self: flex-end;
    align-items: center;
    padding-left: 8px;
    margin-bottom: 16px;
  }

  .digit-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    input {
      width: 50px;
      height: fit-content;
      background-color: var(--text-color);
      border: none;
      text-align: center;
      color: var(--primary-color);
      margin: 0 2px;
      font-family: Manrope;
      font-size: 20px;
      font-weight: 700;
      padding: 12px;
      border: 2px solid var(--tertiary-color);
      border-radius: 6px;
      outline: none;
    }
  }

  /* ----------Dashboard---------- */

  .dashboard{
    width: 100vw;
    height: 100vh;
  }

  .dashboard-contents{
    width: 100%;
    padding: 16px 16px 64px 16px;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .bar-chart-container{
    background: linear-gradient(90deg, #35B3FF 0%, #7847FA 100%), #D9D9D9;
    padding: 16px;
    border-radius: 10px;
  }

  .dashboard-attendance-section, 
  .dashboard-examinations-section, 
  .dashboard-announcements-section,
  .dashboard-calendar-section{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .statistics-card-container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /* ----------Media Query---------- */
  @media (max-width: 768px) {
    .get-started-container {
      padding: 16px 32px;
      justify-content: space-evenly;
    }

    .get-started-button-container button {
      width: 100%;
      min-width: 50px;
    }

    .auth-container {
      padding: 64px 32px 0 32px;
    }

    .auth-form-container {
      width: 100vw;
      padding: 32px;
      bottom: 0;
    }

    .login-form,
    .forgot-email-entry-form {
      width: 100%;
    }

    .input-with-label {
      width: 100%;
    }

    .input-with-label input {
      min-width: 100%;
    }

    .input-with-label-div {
      width: fit-content;
    }

    .input-with-label-and-button,
    .input-with-label-div {
      width: 100%;
    }

    .forgot-email-entry-form{
      padding: 32px;
    }

    .input-with-label-div input{
      min-width: 100px;
    }
  }

  @media (min-width: 768px) {
    .dashboard{
      display: flex;
      height: auto;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow: scroll;
    }
    .dashboard-contents{
      max-width: 600px;
      /* overflow: scroll; */
    }

    .dashboard-footer{
      width: 600px;
    }
  }
`;

export default GlobalStyle;
