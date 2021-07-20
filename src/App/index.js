import StyleOptionsMenu from "../components/StyleOptionsMenu";
import GlobalStyles from "../GlobalStyles";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";
import { Route, Switch } from "react-router-dom";
import ViewForm from "../components/ViewForm";

export default function App () {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path='/'>
          <Sidebar />
          <Form />
          <StyleOptionsMenu />
        </Route>
        <Route exact path='/:id'>
          <ViewForm />
        </Route>
      </Switch>
    </>
  );
}
