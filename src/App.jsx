// import { useState } from 'react';
import profilePic from "./assets/profile.png"
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://angierodriguez.dev" target="_blank">
          <img src={profilePic} className="logo" alt="Profile Pic" />
        </a>
      </div>
      <main className="section__main">
        <h1>Angie Rodriguez</h1>
        <p className='profession'>Frontend Developer</p>
        <small>angierodriguez.dev</small>
        <div className="button-container">
          <button className="button">Email</button>
          <button className="button">LinkedIn</button>
        </div>
        <section className='section-copy'>
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque eius consequatur labore dignissimos voluptas, excepturi quae est, provident, sint pariatur magnam soluta minus! Expedita ut eveniet corporis error dolore.</p>
        </section>
        <section className='section-copy'>
          <h2>Interest</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis magnam dicta ipsum, nam repellendus! Enim necessitatibus beatae explicabo perferendis sint non est, magni quo voluptas facilis unde optio quod.</p>
        </section>
      </main>
      <footer className="section__footer">
        <p>Footer copy</p>
      </footer>
    </>
  );
}

export default App;
