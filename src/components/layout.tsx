// components/Layout.tsx

import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import footerdata from '../components/json/footer'
import { FooterItem } from "@/types/hometype";
import { FilterProvider } from './contextapi';
type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children }: LayoutProps) => {

  const getLayout = (page: ReactNode) => (

    <>
      <FilterProvider>
        <Header />
        {page}
        {footerdata.map((id: FooterItem) => {
          return (
            <Footer id={id} key={id.id} />
          )
        }
        )
        }
      </FilterProvider>
    </>
  );

  return <div>{getLayout(children)}</div>;
};

export default Layout;
