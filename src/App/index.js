import StyleOptionsMenu from "../components/StyleOptionsMenu";
import GlobalStyles from "../GlobalStyles";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";

export default function App () {
  return (
    <>
      <GlobalStyles />
      <StyleOptionsMenu />
      <Sidebar />
      <Form />
    </>
  );
}
