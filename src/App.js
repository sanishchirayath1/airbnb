import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })        
    
         
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards-container">
                <section className="cards-list">
                    {cards}
                </section>
            </div> 
        </div>
    )
}