import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bulma/css/bulma.min.css';
import './index.css'
import App from './App.jsx'
import { Provider } from './context/tasks.jsx'

createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>,
)
