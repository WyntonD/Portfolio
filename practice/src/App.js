import logo from './logo.svg';
import { Element } from 'rc-scroll-anim';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import './App.css';

function App() {
  return (
    <div className="App">
      <Element className="pack-page">
        <div>demo</div>
      </Element>
      <ScrollParallax id="para" vars={{x:100}}>Parallax</ScrollParallax>
    </div>
  );
}

export default App; 