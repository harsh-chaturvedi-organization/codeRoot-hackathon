
import styled from "styled-components";

export const Modaldiv = styled.div`
  height: 60vh;
  width: 40vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & > img {
    height: 100px;
    width: 110px;
    margin-top: 20px;
  }
  & > .text-content {
    margin-bottom: 20px;
    margin-top: 20px;
    & > h2,
    p {
      margin: 0px;
    }
    & > h2 {
      font-weight: 500;
    }
    & > p {
      font-size: 14px;
      width: 80%;
      margin: auto;
      color: #4b587c;
    }
  }
  & .google-signin-btn {
    display: flex;
    border: 1px solid #d9e1ec;
    padding: 15px 30px;
    background-color: white;
    :hover {
      background-color: #f3f3f3;
    }
    & > h3 {
      margin: 0px;
      /* line-height: 0.8; */
      margin-left: 20px;
      font-weight: 500;
    }
  }
  & .other-logins {
    margin-top: 20px;
    display: flex;
    & > button {
      height: 45px;
      width: 45px;
      background-color: white;
      border: 1px solid #d9e1ec;
      margin: 5px;
      :hover {
        background-color: #f3f3f3;
      }
    }
  }
  & > p {
    font-size: 12px;
    color: #4b587c;
  }`