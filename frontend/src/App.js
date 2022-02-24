import GlobalStyle from './styles/global';
import ReactRoutes from './routes';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <ReactRoutes />
      <GlobalStyle />
    </>
  );
}

export default App;
