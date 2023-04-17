import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GalleryTitle = styled.h1`
  text-align: center;
`;

export const Gallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const GalleryItem = styled(Link)`
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;
export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieTitle = styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  text-align: start;
  transition: font-size 0.2s ease-out;
`;
