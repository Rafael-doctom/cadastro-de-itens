import '../../App.css';
import Aside from '../../components/aside';
import Form from '../../components/form';

function App() {
    return (
        <div className="App" style={{ display: 'flex' }}>
            <Aside />
            <Form />
        </div>
    );
}

export default App;
