import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { AuthContextProvider } from './context/AuthContext'
import { ImageContextProvider } from './context/ImageContext'
import './App.css'


function App() {

  return (
    <div>
      <AuthContextProvider>
        <ImageContextProvider>
          <RouterProvider router={routes} />
        </ImageContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App
