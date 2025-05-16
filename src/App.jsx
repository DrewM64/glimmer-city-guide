import './App.css'

function NavBar() {
  return (
    <nav>
        <ul>
            <li>News</li>
            <li>Explore Glimmer</li>
            <li>Eat & Drink</li>
            <li>Events</li>
        </ul>
    </nav>
  );
}


function App() {
  return (
    <header>
      <NavBar />
    </header>
  )
}

export default App
