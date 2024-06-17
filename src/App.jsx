import Hero from './components/Hero'
import Demo from './components/Demo'
import './App.css';

const App = () => {
  return (
    <main>
        <div className='main bg-slate-400 z-0'>
            <div className='gradient'/>
        </div>
        <div className='app'>
            <Hero/>
            <Demo/>
        </div>
    </main>
  )
}

export default App