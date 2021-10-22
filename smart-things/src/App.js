import Header from "./components/header/Header";
import {dataDBSmartThings} from "./dataDB/dataDB";
import Card from "./components/card/Card";


function App() {

    console.log(dataDBSmartThings)

    return (
        <div>
            <Header title={'Умные вещи'}/>
            <Card/>
        </div>
    );
}

export default App;
