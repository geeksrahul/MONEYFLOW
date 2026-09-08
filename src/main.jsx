import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from "./store/store.js"
import router from './routes/router.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
