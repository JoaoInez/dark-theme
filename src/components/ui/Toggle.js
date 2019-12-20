import React from "react";
import styled from "styled-components";

const SwitchWrapper = styled.div`
  input {
    display: none;

    &:checked + label {
      background-color: ${({ theme }) => theme.green};

      &::after {
        transform: translateX(17px);
      }
    }
  }

  label {
    background-color: ${({ theme }) => theme.gray};
    width: 35px;
    border-radius: 50px;
    padding: 2px 0;
    cursor: pointer;
    display: block;

    &::after {
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: white;
      display: block;
      transform: translateX(2px);
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Switch = ({ active, onChange, id }) => (
  <SwitchWrapper>
    <input type="checkbox" onChange={onChange} id={id} checked={active} />
    <label htmlFor={id}></label>
  </SwitchWrapper>
);

export { Switch };
