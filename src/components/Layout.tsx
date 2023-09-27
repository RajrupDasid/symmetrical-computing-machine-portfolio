// Layout.tsx
import React, { ReactNode, useEffect } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <div>{children}</div>;
};

export default Layout;
