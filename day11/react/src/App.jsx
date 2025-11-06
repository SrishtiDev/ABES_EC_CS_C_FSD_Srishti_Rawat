import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';
import "./App.css"

function 
App() {
  return (
    <div > 
      <Navbar />
      <br />
      <Card class="c1"
        name="Pizza"
        edu="$58.9"
        img="https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png"
      />
      <br />
      <Card class="c1"
        name="Burger"
        edu="$12.0"
        img="https://e7.pngegg.com/pngimages/201/77/png-clipart-delicious-beef-burger-delicious-beef-burger-tomato-thumbnail.png"
      />
      <br />
      <Card class="c1"
        name="Coke"
        edu="$1.5"
        img="https://atlas-content-cdn.pixelsquid.com/stock-images/coke-soda-q13q2x2-600.jpg"
      />
    </div>
  );
}

export default App
