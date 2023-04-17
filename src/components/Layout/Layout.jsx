import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyledNavLink } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
