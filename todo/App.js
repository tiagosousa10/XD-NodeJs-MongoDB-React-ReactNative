import Home from './src/views/Home'
import Task from './src/views/Task'

//disabilita os alerts de erros do react-native - recomendado pelo professor
console.disableYellowBox=true;

export default function App() {
  return (
    <Task/>
  );
}

