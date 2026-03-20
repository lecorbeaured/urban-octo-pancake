import React from 'react'
export default function ProductCard({p}:{p:any}){
  return (
    <article className="product-card">
      <img src={p.image} alt={p.name} style={{width:'100%',height:200,objectFit:'cover'}}/>
      <h3>{p.name}</h3>
      <p className="muted">{p.price}</p>
      <p>{p.description}</p>
      <ul>
        {p.pros.map((x:string)=> <li key={x}>✅ {x}</li>)}
      </ul>
      <div style={{display:'flex',gap:8}}>
        <a className="btn" href="#affiliate-link">Check Price</a>
        <a className="btn ghost" href={`/product/${p.slug}`}>View Product</a>
      </div>
    </article>
  )
}
