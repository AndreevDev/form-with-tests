import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
    return (
        <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Form/>
            <Table/>
        </div>
    );
}

export default App;
