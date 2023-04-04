// components/Layout.tsx

import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import footerdata from '../components/json/footer'
import { footerItem } from "@/types/hometype";
type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children }: LayoutProps) => {
  const getLayout = (page: ReactNode) => (

    <>
      <Header />
      {page}
      {footerdata.map((id: footerItem) => {
        return (
          <Footer id={id} key={id.id} />
        )
      }
      )
      }
    </>
  );

  return <div>{getLayout(children)}</div>;
};

export default Layout;
