import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: var(--white-fixed);
  padding: 20px;
  gap: 8px;
  border-radius: 8px;

  .TitleForm {
    display: flex;
    flex-direction: column;

    h1 {
      margin: 6px 0;
      font-family: "Inter";
    }
  }

  .DivRadio {
    display: flex;
    flex-direction: column;
    font-family: "Inter";

    h2 {
      margin: 6px 0;
    }

    input {
      width: 20%;
    }

    .DisplayFlex {
      display: flex;
      justify-content: center;
    }
  }

  .DivInfo {
    display: flex;
    flex-direction: column;
    font-family: "Inter";

    h2 {
      margin: 6px 0;
    }

    label {
      margin: 4px 0;
    }

    input {
      width: 100%;
      padding: 4px 0;
      border: none;
      font-family: "Inter";
      margin: 0 6px;
    }

    .description {
      padding: 14px 0;
    }
    .DisplayFlex {
      display: flex;
      justify-content: center;
    }
  }

  .divP button {
    width: 78%;
    margin: 10px 0;
    padding: 6px;
    border: 1.5px solid var(--color-brand-4);
    border-radius: 4px;
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-family: "Inter";
    cursor: pointer;
  }

  .divP button:hover{
    border: 1.5px solid var(--color-brand-1);
    background-color: var(--color-brand-1);
    color: var(--white-fixed);
  }

  .DivButtons {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    font-family: "Inter";
    position: relative;
    left: 150px;
  }

  .DivButtons .cancel {
    width: 30%;
    background-color: var(--color-grey-6);
    border: none;
    border-radius: 4px;
  }

  .DivButtons .cancel:hover {
    cursor: pointer;
    background-color: var(--color-alert-1);
    color: var(--white-fixed);
  }

  .DivButtons .create {
    width: 60%;
    padding: 12px 0;
    background-color: var(--color-brand-3);
    color: var(--color-brand-4);
    border: none;
    border-radius: 4px;
  }

  .DivButtons .create:hover {
    cursor: pointer;
    background-color: var(--color-brand-1);
  }
`;

export const FormButton = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .radio {
    list-style: none;
  }
`;

export const FormInfo = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
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

  label {
    margin: 10px 0;
  }

  input {
    width: 100%;
    padding: 4px;
    border: none;
  }
`;

// export const FinalButton = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* margin: 0 auto; */

//   .cancel button {
//     width: 90%;
//     padding: 20px;
//     background-color: var(--color-grey-6);
//     border: none;
//     border-radius: 4px;
//     margin: 0 4px;
//   }

//   .cancel button:hover {
//     cursor: pointer;
//     background-color: var(--color-alert-1);
//     color: var(--white-fixed);
//   }

//   .create button {
//     width: 100%;
//     padding: 20px;
//     background-color: var(--color-brand-3);
//     color: var(--color-brand-4);
//     border: none;
//     border-radius: 4px;
//   }

//   .create button:hover {
//     cursor: pointer;
//     background-color: var(--color-brand-1);
//   }
// `;
