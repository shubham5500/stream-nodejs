import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {

  const ref = useRef();

  const onUpload = (e) => {
    const file = ref.current;

    const selectedFile = file.files[0];

    console.log({selectedFile});
  }

  return (
    <div className="App">
     <input type="file" ref={ref} onChange={onUpload}/>
    </div>
  );
}

export default App;
