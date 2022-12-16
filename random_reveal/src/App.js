import './App.css';
import { RandomReveal } from 'react-random-reveal';

function App() {

  return (
    <div className="container">
      <h1 class="heading" data-target-resolver>
      <RandomReveal
          isPlaying
          duration={2}
          revealDuration={1.6}
          characters="happy new year !!"
          onComplete={() => ({ shouldRepeat: true, delay: 2})}
        /></h1>
    </div>
  );
}

export default App;
