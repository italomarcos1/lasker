import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 422px;
  flex-direction: column;

  label {
    font-weight: bold;
    color: #fbfdfd;
    font-size: 16px;
  }

  input {
    width: 100%;
    margin-top: 8px;
    height: 56px;
    border-radius: 4px;
    color: #333;
    padding-left: 12px;
    font-size: 18px;

    &::placeholder {
      color: #333;
    }
  }
`;
