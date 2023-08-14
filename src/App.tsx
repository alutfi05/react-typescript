import { useState } from 'react';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <div className="app">
      <span className="heading">Taskify</span>

      <InputField />
    </div>
  );
};

export default App;
