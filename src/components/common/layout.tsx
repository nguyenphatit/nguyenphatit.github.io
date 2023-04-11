import { useEffect, useState } from "react";
import Cursor from "./cursor";
import Gtag from "./gtag";

interface Props {
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  const [isDev] = useState(() => process.env.NODE_ENV === 'development');

  useEffect(() => {
    if (!isDev) {
      const element = document.querySelector('*') as HTMLElement;
      element.style.cursor = "none";
    }
  })

  return (
    <>
      {!isDev && <Cursor />}
      <main>{children}</main>
      <Gtag />
    </>
  );
}
