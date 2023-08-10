import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { Main, Wrapper } from "./Layout.styled";
import { Loader } from "components/Loader/Loader";
import { HeaderNav } from "components/HeaderNav/HeaderNav";
import Container from "components/Container/Container";
import { LinkWrapper, StyledLink } from "components/HeaderNav/HeaderNav.styled";
import { TbTruckDelivery } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";

export const Layout = () => {
  return (
    <>
      <Wrapper>
        <HeaderNav />
        <Container>
          <Main>
            <LinkWrapper>
              <StyledLink to="/">
                Перевірити ТТН <TbTruckDelivery size={24} />
              </StyledLink>
              <StyledLink to="/address">
                Список відділень <GrMapLocation size={24} />
              </StyledLink>
            </LinkWrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Main>
        </Container>
      </Wrapper>
    </>
  );
};
