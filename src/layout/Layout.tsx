import React, { ReactElement } from "react";
import Navbar from "../components/common/Navbar";
import Toast from "../components/common/Toast";

interface Props {
  children: ReactElement;
}
function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <Toast/>
      <div className="mt-[92px]">{children}</div>
    </div>
  );
}

export default Layout;
