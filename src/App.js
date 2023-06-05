import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './util/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
//import VideoContainer from './components/VideoContainer';
import WatchVideo from './components/WatchVideo';
import MainContent from './components/MainContent';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children: [
      {
        path:'/',
        element:<MainContent />
      },
      {
        path:"/watch",
        element:<WatchVideo />
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

          // Head
          // Body
          //   Sidebar
          //     MenuItems
          //   Main-Content
          //     Tags
          //     VideoContainer
          //       VideoCard