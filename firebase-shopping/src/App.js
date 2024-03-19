import {app,messaging} from './firebase/index'
import { Header } from './components/Header';
import { useState,createContext,useContext } from 'react';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Register } from './routes/Register';
import { Shopping } from './routes/Shopping';
import toast, { Toaster } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';
import { MessageToast } from './shared/MessageToast';
import { Footer } from './components/Footer';
import { TaskList } from './components/TaskList';



export const AppContext=createContext(null);

onMessage(messaging,payload=>{
  console.log("Nueva Notificacion en Directo", payload);
  // const {title,body,image}=payload.notification.body;

  toast.custom(t=>(
    <div className='bg-sky-300 p-4 rounded-lg shadow-lg'>
      <h1 className='text-lg text-sky-700'>
        {payload.notification.title}
      </h1>
      <p className='text-sm text-sky-500'>
        {payload.notification.body}
      </p>
    </div>
  ));
  // console.log(title);

  // <MessageToast title={title} body={body}  image={image}/>;
  // <MessageToast/>

})


function App() {
  
  const [route,setRoute]=useState("home");
  const [user,setUser]=useState(null);

  return (
    <AppContext.Provider value={{route,setRoute,user,setUser}}>
      <div className='h-screen'>
        <Toaster />
        <Header/>
        <main className='px-6 pt-24 pb-24'>
          {/* {route==="home"?<Home setRoute={SetRoute} />:null}
          {route==="login"?<Login setRoute={SetRoute} />:null} */}
          { route==="home"
            &&
            <Home/>
          }
          { route==="login"
            &&
            <Login/>
          }
          { route==="register"
            &&
            <Register/>
          }
          { route==="shopping"
            &&
            <Shopping/>
          }
          { route==="tasklist"
            &&
            <TaskList/>
          }
          {
            user && <p>Usuario logueado: {user.email}</p>
          }
        </main>
        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
