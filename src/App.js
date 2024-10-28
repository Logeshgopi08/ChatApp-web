import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ChatPage from "./components/ChatPage";
import AuthPage from "./components/AuthPage";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore";



function App() {
  

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<ChatPage/>
        },
        {
          path:"/auth",
          element:<AuthPage />
        },
        {
          path:"/editprofile",
          element:""
        }
      ]
    }
  ])
  return (
    <Provider store={appStore}>
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
