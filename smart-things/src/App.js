import Header from "./components/header/Header";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setSmartThings, updateSmartThings} from "./redux/smartThingsSlice";
import {dataDBSmartThings} from "./dataDB/dataDB";
import Card from "./components/card/Card";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/footer/Footer";
import MyButton from "./components/ui/button/MyButton";
import './app.css'


function App() {
    const errorApp = useSelector(state => state.smartThings.error)
    const dispatch = useDispatch()


    const loading = useSelector(store => store.smartThings.loading)

    const setLoader = () => {
        dispatch(updateSmartThings(dataDBSmartThings))
    }

    useEffect(() => {
        dispatch(setSmartThings(dataDBSmartThings))
    }, [])

    return (
        <div className={'app'}>
            {
                !errorApp ? <>
                    <header className={'header'}>
                        <Header className={'card'} title={'Умные вещи'}/>
                    </header>
                    <main className={'main'}>
                        <Card/>
                    </main>
                    <footer className={'footer'}>
                        <Footer/>
                        {
                            loading ? <div className={' btnUpdateActiveWrapper'}>
                                    <div className={'btnUpdateActive'}/>
                                </div>
                                :
                                <div className={'btnUp'}>
                                    <MyButton action={setLoader} style={'white'} size={'big'} text={'Обновить'}/>
                                </div>

                        }
                    </footer>
                </> : <ErrorPage active={errorApp} setActive={errorApp} text={'Что то пошло не так, ошибка '}
                                 error={'123'} background={'#19212C'}/>
            }
        </div>
    );
}

export default App;
