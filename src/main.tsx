import ErrorBoundary from "./components/ErrorBoundary"
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Disclosure from './pages/Disclosure'
const CategoryPage = React.lazy(() => import('./pages/categories/CategoryPage'))
const ProductPage = React.lazy(() => import('./pages/products/ProductPage'))
const BestBeachChairs = React.lazy(() => import('./pages/guides/BestBeachChairs'))

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
      <Suspense fallback={<div className='loader'>Loading…</div>}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/category/:slug' element={<CategoryPage/>} />
        <Route path='/product/:slug' element={<ProductPage/>} />
        <Route path='/guides/best-beach-chairs' element={<BestBeachChairs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/disclosure' element={<Disclosure/>} />
      </Routes>
      </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
