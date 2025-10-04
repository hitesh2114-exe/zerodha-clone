import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from './components/Home';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
const emotionCache = createCache({ key: 'css' });



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CacheProvider value={emotionCache}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CacheProvider>
  </StrictMode>,
)
