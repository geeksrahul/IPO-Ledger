import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// routing
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
// redux store
import { Provider } from 'react-redux'
import store from './store/store.js'
// css
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
