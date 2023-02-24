import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--white-fixed);
  min-height: 100vh;
  margin: 0 auto;
  padding: 10px;

  h1{
    margin: 6px 0;
  }

  h2{
    margin: 10px 0;
  }
`;

export const FormButton = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  .radio{
    list-style: none;
  }

`;

export const FormInfo = styled.form`
  display: flex;
  flex-direction: column;

  h2{
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 4px 0;
    border: none;
  }
`;

export const NumberInfo = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const ImgInfo = styled.form`
  display: flex;
  flex-direction: column;

  label{
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 4px;
    border: none;
  }
`

export const FinalButton = styled.form`
  display: flex;
  flex-direction: row;
  /* margin: 0 auto; */

  .cancel button{
    width: 90%;
    padding: 20px;
    background-color: var(--color-grey-6);
    border: none;
    border-radius: 4px;
    margin: 0 4px;
  }

  .cancel button:hover{
    cursor: pointer;
    background-color: var(--color-alert-1);
    color: var(--white-fixed);
  }

  .create button{
    width: 100%;
    padding: 20px;
    background-color: var(--color-brand-3);
    color: var(--color-brand-4);
    border: none;
    border-radius: 4px;
  }

  .create button:hover{
    cursor: pointer;
    background-color: var(--color-brand-1);
  }
`;
