import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Yanta" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
