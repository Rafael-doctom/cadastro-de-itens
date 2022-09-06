import '../../App.css';
import Aside from '../../components/aside';
import Form from '../../components/form';

function Home() {
    return (
        <div className="App" style={{ display: 'flex' }}>
            <Aside />
            <Form />
        </div>
    );
}

export default Home;
