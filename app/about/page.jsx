import React from 'react'
import styles from "@/app/styles/About.css"
const Aboutus = () => {
  return (
    <div className='flex justify-center  items-center text-center bg-black text-white'>
      <div>
      <div className={styles.about}>
        <div className="ma">
          <h1 className="po">What I do</h1>
          <p id='Pl'>I am a Skilled and Passionate Front End Developer with experience in creating visually appealing <br /> and user-frienly websites. I have a strong Understanding of development and a keen eye  for <br />details. I am Proficient in HTML,CSS and Javascript as well as Intermediate in React Js.</p>
          <div className="skills">
            <div className="skl">
            <div className="skill1">
              <img src="/skill1.png" alt='' id="skill1" />
              <div className="igpo"><h1 id='kj'>Website Design</h1>
              <p id='po12'>I have Knowledge of HTML , CSS and Bootstrap .</p></div>
            </div>
            <div className="skill1">
            
              <img src="/skill2.png" alt='' id="skill1" />
            <div className="igpo">  <h1 id='kj'>Javascript</h1>
              <p id='po12'> I have Knowledge of Javascript which can be used in Industry Production or to Manipulate Dom.</p></div>
            </div>
            <div className="skill1">
            
              <img src="/skill3.png" alt='' id="skill1" />
            <div className="igpo">  <h1 id='kj'>React</h1>
              <p id='po12'>I also Know React which is a JavaScript library that's used for building reactive websites.</p></div>
            </div>
            <div className="skill1">
            
              <img src="/skill4.png" alt='' id="skill1" />
              <div className="igpo"><h1 id='kj'>Git/Github</h1>
              <p id='po12'>Code hosting platform for version control and collaboration.</p></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Aboutus
