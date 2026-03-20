import React from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../../data/products.json'

export default function ProductPage(){
  const { slug } = useParams()
  const all = Object.values(products).flat()
  const p = all.find((x:any)=> x.slug===slug)
  if(!p) return <main style={{padding:20}}>Product not found. <Link to="/">Home</Link></main>
  return (
    <main style={{padding:20}}>
      <h1>{p.name}</h1>
      <img src={p.image} alt={p.name} style={{width:'100%',maxWidth:600}}/>
      <p className="muted">{p.price}</p>
      <p>{p.description}</p>
      <h3>Pros</h3>
      <ul>{p.pros.map((x:string)=> <li key={x}>{x}</li>)}</ul>
      <h3>Cons</h3>
      <ul>{p.cons && p.cons.map((x:string)=> <li key={x}>{x}</li>)}</ul>
      <a className="btn" href="#affiliate-link">Check Price</a>
    </main>
  )
}
