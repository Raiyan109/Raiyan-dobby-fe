import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { AuthContextProvider } from './context/AuthContext'


function App() {

  return (
    <div>
      <AuthContextProvider>
        <RouterProvider router={routes} />
      </AuthContextProvider>
    </div>
  )
}

export default App
