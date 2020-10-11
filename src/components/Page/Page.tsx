import React, { ReactNode } from "react";
import { ContentContainer, PageContainer } from "./styles";
import TopBar from "./TopBar";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <PageContainer>
      <TopBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
};

export default Page;
