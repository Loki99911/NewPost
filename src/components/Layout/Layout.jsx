import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { Main, Wrapper } from "./Layout.styled";
import { Loader } from "components/Loader/Loader";
import { HeaderNav } from "components/HeaderNav/HeaderNav";

export const Layout = () => {
  return (
    <>
      <Wrapper>
        
        <HeaderNav />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </Wrapper>
    </>
  );
};
