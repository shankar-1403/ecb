import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StackedSnackbarProvider } from './components/SnackbarProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StackedSnackbarProvider>
        <App />
    </StackedSnackbarProvider>
)
