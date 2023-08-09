import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { Main, Wrapper } from "./LayoutStyled";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {
  return (
    <>
      <Wrapper>
        {/* <Header /> */}
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        {/* <Footer /> */}
      </Wrapper>
    </>
  );
};
