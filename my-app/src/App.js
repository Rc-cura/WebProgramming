import profile from './public/profile.png';
import './App.css';

function App() {
  return (

    <div className="App">
      <section className="Container">
              <div>
      <img src={profile} alt="image" /> 
      </div>

      <h1>Hi, I'm Rc Cura</h1>
      <h2> BSIT Student </h2>

      <p>Welcome to my portfolio! I am passionate about web development and
          continuously improving my skills in creating modern, responsive, and
          user-friendly applications.</p>
          </section>


<div className='hr-div'>
<hr/>
</div>
  

<div className="subContainer">

      <section className="about">
        <h2>About Me</h2>
      <p>Hello! My name is Rc Cura, and I am a Bachelor of Science in Information Technology (BSIT) student with a passion for technology and continuous learning. I enjoy developing websites and applications using modern technologies such as React.js, JavaScript, HTML, and CSS.</p> 


      </section>
      <hr/>

      <section>
      <h2>Education</h2>
        <p>
          Bachelor of Science in Information Technology (BSIT)
          <br />
          National University MOA
        </p>
     
      </section>

      <hr/>

      <section>
      <h2>Experience</h2>
        <p>
          Currently building academic and personal projects to strengthen my web development and software engineering skills.
        </p>
      </section>

      <hr/>

      <section>

        <h2>Skills</h2>
        <h3>Frontend</h3>

        <ul>
          <li>CSS</li>
          <li>ReactJs</li>
        </ul>

        <h3>Backend</h3>

        <ul>
          <li>node.js</li>
          <li>Supabase</li>
        </ul>

      </section>

      <hr/>

      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: rccura431@gmail.com</p>
        <p>GitHub: github.com/Rc-cura</p>
        <p>Contact Number: 09994640447</p>
      </section>



      </div>

      
      

    </div>

  );
}

export default App;
