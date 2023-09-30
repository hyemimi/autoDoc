import Home from 'pages/Home';
import Selection from 'pages/Selection';
import AutoDoc from 'pages/AutoDoc';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', 
      //element: <DefaultLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'selection', element: <Selection /> },
        { path: 'autoDoc/:id', element: <AutoDoc /> }
      ] }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
