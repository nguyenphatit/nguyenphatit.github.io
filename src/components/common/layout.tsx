import Cursor from "./cursor";
import Gtag from "./gtag";

interface Props {
    children: string | JSX.Element | JSX.Element[];
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Cursor />
      <main>{children}</main>
      <Gtag />
    </>
  );
}
