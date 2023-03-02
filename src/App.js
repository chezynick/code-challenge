import './App.css';
import MainScreen from './Components/MainScreen';
 import { QueryClient,QueryClientProvider,} from 'react-query'

  const queryClient = new QueryClient()
function App() {
  
  return (
    <div className="App">
      <QueryClientProvider  client={queryClient}>
    <MainScreen /></QueryClientProvider>
    </div>
  );
}

export default App;
