// components/Layout.tsx

import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const getLayout = (page: ReactNode) => (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );

  return <div>{getLayout(children)}</div>;
};

export default Layout;
