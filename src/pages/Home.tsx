import { Link } from 'react-router-dom'

const categories = [
  { slug:'beach', title:'Beach Essentials', desc:'Chairs, tents, umbrellas and waterproof tech for beach days.', image:'/assets/tommy-chair.jpg' },
  { slug:'travel', title:'Travel Gear', desc:'Backpacks, power banks, organizers and carry-on must-haves.', image:'/assets/anker.jpg' },
  { slug:'outdoor', title:'Outdoor Adventure', desc:'Hammocks, solar chargers, headlamps and camping comforts.', image:'/assets/jbl.jpg' },
  { slug:'festival', title:'Festival Essentials', desc:'Hydration packs, LED accessories, portable fans.', image:'/assets/beach-tent.jpg' },
  { slug:'pool', title:'Pool Party Gear', desc:'Waterproof speakers, inflatable floats, cooler tables.', image:'/assets/jbl.jpg' },
  { slug:'health', title:'Summer Health & Skincare', desc:'Sunscreen, cooling mists, after-sun care.', image:'/assets/beach-tent.jpg' }
]

export default function Home(){
  return (
    <>
      <header className="hero">
        <div className="container">
          <p className="label">SummerGearLab · Everything You Need for the Perfect Summer</p>
          <h1>Discover the Best Products for the Ultimate Summer</h1>
          <p>Find the gear, gadgets, and essentials people are using to make summer unforgettable.</p>
          <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
            <Link className="cta" to="/category/beach">Explore Beach Gear</Link>
            <Link className="cta ghost" to="/category/travel">Explore Travel Essentials</Link>
            <Link className="cta ghost" to="/guides/travel-gear">Travel Guide</Link>
          </div>
        </div>
      </header>
      <section className="container" style={{paddingTop:'2rem',paddingBottom:'3rem'}}>
        <h2>Shop by Category</h2>
        <div className="cards">
          {categories.map(cat => (
            <Link to={`/category/${cat.slug}`} key={cat.slug} className="card">
              <img src={cat.image} alt={cat.title} />
              <div className="body">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container" style={{paddingBottom:'4rem'}}>
        <h2>Featured Guides</h2>
        <div className="cards">
          <Link to="/guides/best-beach-chairs" className="card">
            <div className="body">
              <h3>Best Beach Chairs for Comfort</h3>
              <p>Quick picks, comparison table, and buyer guide.</p>
            </div>
          </Link>
          <Link to="/guides/travel-gear" className="card">
            <div className="body">
              <h3>Best Summer Travel Gear</h3>
              <p>Carry-on essentials to beat the heat.</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
