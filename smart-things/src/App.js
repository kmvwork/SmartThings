import Header from "./components/header/Header";
import {dataDBSmartThings} from "./dataDB/dataDB";
import Card from "./components/card/Card";
import BtnUpdate from "./components/btnUpdate/BtnUpdate";
import ErrorPage from "./components/errorPage/ErrorPage";
import Moment from "react-moment";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSmartThings} from "./redux/smartThingsSlice";

import './app.css'
import Footer from "./components/footer/Footer";


function App() {
    const errorApp = useSelector(state => state.smartThings.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSmartThings(dataDBSmartThings))
    }, [])

    return (
        <div className={'app'}>
            <>
                {
                    errorApp === false ? <>
                        <header className={'header'}>
                            <Header className={'card'} title={'Умные вещи'}/>
                        </header>
                        <main className={'main'}>
                            <Card/>
                        </main>
                        <footer className={'footer'}>
                            <Footer/>
                            <BtnUpdate classes={'btnUp'} data={{title: 'Обновить', classStyle: 'update'}}/>
                        </footer>
                    </> : <ErrorPage active={errorApp} setActive={errorApp} text={'Что то пошло не так, ошибка '}
                                     error={'123'} background={'#19212C'}/>
                }
            </>
        </div>
    );
}

export default App;
