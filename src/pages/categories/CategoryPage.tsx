import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import products from '../../data/products.json'

export default function CategoryPage(){
  const { slug } = useParams()
  // @ts-ignore
  const list = products[slug as string] || []
  return (
    <main style={{padding:20}}>
      <h1 style={{textTransform:'capitalize'}}>{slug} Essentials</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16}}>
        {list.map((p:any)=> <ProductCard key={p.slug} p={p} />)}
      </div>
      <div style={{marginTop:20}}><Link to="/">← Back home</Link></div>
    </main>
  )
}
