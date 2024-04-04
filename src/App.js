import './App.css';
import ApolloAppProvider from './ApolloProvider';
import CharacterList from './components/CharacterList';
import CharacterForm from './components/CharacterForm';
function App() {
  return (
    <ApolloAppProvider>
      <div className="App">
        <header className="App-header">
          <CharacterForm/>
          <CharacterList/>
        </header>
      </div>
    </ApolloAppProvider>
  );
}

export default App;
