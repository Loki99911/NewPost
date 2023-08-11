import styled from 'styled-components';
import Select from 'react-select';

export const SelectInput = styled(Select)`
  .Select__control {
    font-size: 16px;
    line-height: 1;
    font-weight: 500;

    width: 69px;
    height: 48px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    outline: none;
    border: none;
  }

  .Select__input {
    color: transparent !important;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    padding: 8px 8px 8px 0;
  }

  .Select__value--container {
    padding: 2px 0px 2px 8px;
  }

  .Select__single-value {
    color: var(--main-black);
    overflow: visible;
  }

  .Select__defaultValue,
  .Select__indicator {
    color: var(--main-black);
  }

  .Select__menu {
    padding: 16px 12px;
    background-color: #ffffff;
    border-radius: 8px;
  }

  .Select__menu-list {
    padding: 0;
    list-style: none;
    text-align: left;
  }

  .Select__option {
    padding: 4px 0;
    background-color: transparent;
    color: var(--main-gray);
    border-bottom: 1px solid var(--main-gray);
    cursor: pointer;
  }
`;
