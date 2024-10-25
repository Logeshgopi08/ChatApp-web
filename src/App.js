import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import ChatPage from "./components/ChatPage";
import AuthPage from "./components/AuthPage";


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
          element:<AuthPage/>
        },
        {
          path:"/editprofile",
          element:""
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
