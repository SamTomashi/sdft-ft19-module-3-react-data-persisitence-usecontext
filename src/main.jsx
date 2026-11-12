import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={{
      username: "Tomashi",
      email: "sam@tomashi.dev"
    }}>
      <App />
    </UserContext.Provider>
  </StrictMode>,
)
