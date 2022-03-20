import './App.css';
import IMGanit from './IMGanit.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>GANiters Go</h2>
      <div class="header">
      <div data-netlify-identity-menu></div>
    </div>
     {/* <Link to="/">
        <img src={IMGanit}  className="Face-logo" alt="FaceLogo" />
      </Link>*/}
        <main><br/><p><strong>Welcome to GANit_ak.io</strong></p><br/>
    <p>:: What they do :: <br/>
        <em>web & mobile app development<br/><br/><br/></em>(front end) & back end<br/>
        <strong><code><br/>Happy times G0 after that.</code></strong>
    </p>
 <a href="https://twitter.com/GANit_ak" target="_blank" rel="twitter">Twitter</a>
    
        </main>
      </header>
      <footer className="footer">&copy; &#8471; GANitak.io</footer>
    </div>
  );
}

export default App;