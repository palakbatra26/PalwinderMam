import { ClerkProvider } from '@clerk/clerk-react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Using the new publishable key
const publishableKey = 'pk_test_YWxlcnQtaW1wYWxhLTQ0LmNsZXJrLmFjY291bnRzLmRldiQ';

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishableKey}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
