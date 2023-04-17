import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  gap: 50px;
  margin: 30px;
`;

export const AdditionalTitle = styled.h3`
  color: #fff;
`;

export const AdditionalList = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  background-color: #1d3557;
`;
export const AdditionalBtn = styled.ul`
  display: flex;
  gap: 5px;
`;

export const AdditionalNavLink = styled(NavLink)`
  background-color: #457b9d;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;

  &:hover {
    background-color: #e63946;
  }

  &.active {
    background-color: #e63946;
  }
`;

export const GoBackBtn = styled(Link)`
  display: inline-block;
  margin: 20px;
  background-color: #457b9d;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const FormSearch = styled.form`
  margin: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  border: #000 1px solid;
  max-width: 300px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const ButtonForm = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const InputSearch = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
