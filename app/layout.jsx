import Navbar from "@components/layout/navbar";
import "@styles/global.css";
import React from "react";

export const metadata = {
  title: "توانا استور | فروشگاه توانا استور",
  description: "فروشگاه آنلاین توانا استور با ارایه کلیه خدمات رفاهی",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        <div className="main">
          <div className="gradient" />{" "}
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
