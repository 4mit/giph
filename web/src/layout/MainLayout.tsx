import React from "react";

const MainLayout = ({ theme, children }: any) => {
  return (
    <div
      style={{
        padding: 10,
        marginTop: theme.mainContainer.margin.top,
      }}
    >
      {children}
    </div>
  );
};
export default MainLayout;
