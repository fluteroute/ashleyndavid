import React from "react";
import HomeAvatar from "./HomeAvatar";
import MainLayout from "./MainLayout";

export type HomeLayoutProps = {
  children?: React.ReactNode;
  title: string;
};

export function HomeLayout(props: HomeLayoutProps) {
  const { children, title } = props;

  return (
    <MainLayout avatar={<HomeAvatar />} title={title} variant="home">
      {children}
    </MainLayout>
  );
}

export default HomeLayout;
