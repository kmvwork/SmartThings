import Header from "./components/header/Header";
import {dataDBSmartThings} from "./dataDB/dataDB";
import Card from "./components/card/Card";
import BtnUpdate from "./components/btnUpdate/BtnUpdate";
import './app.css'
import ErrorPage from "./components/errorPage/ErrorPage";
import BtnUser from "./components/btnUser/BtnUser";
import Moment from "react-moment";
import {useEffect, useState} from "react";
import DeleteItem from "./components/deleteItem/DeleteItem";
import {useDispatch, useSelector} from "react-redux";
import {setSmartThings} from "./redux/smartThingsSlice";


function App() {
    const errorApp = useSelector(state => state.smartThings.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSmartThings(dataDBSmartThings))
    }, [])

    const [modalActiveDelete, setModalActiveDelete] = useState(false)
    const [modalActiveError, setModalActiveError] = useState(errorApp)

    return (
        // <>
        //     <DeleteItem active={modalActiveDelete} setActive={setModalActiveDelete} text={'Вы хотите удалить робот пылесос?'}/>
        //     <button onClick={() => setModalActiveDelete(true)}>DELETE</button>
        // </>

        // <>
        //     <ErrorPage active={modalActiveError} setActive={setModalActiveError} text={'Что то пошло не так, ошибка '}
        //                error={'123'} background={'#19212C'}/>
        //     <button onClick={() => setModalActiveError(true)}>DELETE</button>
        // </>

        <div className={'app'}>
            <>
                {
                    errorApp == false ? <>
                        <header className={'header'}>
                            <Header className={'card'} title={'Умные вещи'}/>
                        </header>
                        <main className={'main'}>
                            <Card/>
                        </main>
                        <footer className={'footer'}>
                            <Moment format="YYYY/MM/DD hh:mm:ss">

                            </Moment>
                            <BtnUpdate classes={'btnUp'} data={{title: 'Обновить', classStyle: 'update'}}/>
                        </footer>
                    </>  :  <ErrorPage active={errorApp} setActive={setModalActiveError} text={'Что то пошло не так, ошибка '}
                                       error={'123'} background={'#19212C'}/>
                }
            </>


            {/*<header className={'header'}>*/}
            {/*    <Header className={'card'} title={'Умные вещи'}/>*/}
            {/*</header>*/}
            {/*<main className={'main'}>*/}
            {/*    <Card/>*/}
            {/*</main>*/}
            {/*<footer className={'footer'}>*/}
            {/*    <Moment format="YYYY/MM/DD hh:mm:ss">*/}
            {/*        {dateToFormat}*/}
            {/*    </Moment>*/}
            {/*    <BtnUpdate classes={'btnUp'} data={{title: 'Обновить', classStyle: 'update'}}/>*/}
            {/*</footer>*/}
        </div>
    );
}

export default App;
