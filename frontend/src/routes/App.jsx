import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import Details from '../containers/Details'
import Header from '../components/Header'
import AddCharacter from '../containers/AddCharacter'
import EditCharacter from '../containers/EditCharacter'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/details/:id" component={Details} />
          <Route exact path="/character/add" component={AddCharacter} />
          <Route exact path="/character/edit/:id" component={EditCharacter} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
