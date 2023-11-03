import React from 'react'
import './LandingPage.css'
import polygon_1 from '../../images/Polygon 1.png'
import polygon_2 from '../../images/Polygon 2.png'
import illustration_1 from '../../images/illustration_1.png'
import illustration_2 from '../../images/illustration_2.png'
import illustration_3 from '../../images/illustration_3.png'
import illustration_4 from '../../images/illustration_4.png'
import learningDevIcon from '../../images/learningDevIcon.png'
import engineeringIcon from '../../images/engineeringIcon.png'
import handShakeIcon from '../../images/handShakeIcon.png'
import graduatingIcon from '../../images/graduationIcon.png'
import { Link } from 'react-router-dom'



const LandingPage = () => {
  return (
    <>
    <section className='landing_page_section'>
        <header>
          <button className='font-bold'><Link to={'/loginform'}>Login</Link></button>
          <button className='get_started_btn'><Link to={'/loginform'}>Get Started</Link></button> 
        </header>

    <article className='skill_up_container flex justify-between mt-12'>
      <div className='flex-1'>
      <h1 className='font-bold text-4xl my-6'><span style={{color: "#4A24B8"}}>Skill up</span> at scale</h1>
      <p>Your workforce can be ready for whatever comes their way with the support of a complete learning solution.</p>
      <button className='bg-black text-white px-6 py-1.5 mt-5'>Get Started</button>
      </div>

      <div className='polygon_div flex-1 mt-10'>
        <div className='polygon_1-div'>
      <img className='polygon_1' src={polygon_1} alt="" />
        </div>
        <div className='polygon_2-div'>
      <img className='polygon_2' src={polygon_2} alt="" />

        </div>
      </div>
      </article>

        <div className='text-center my-10'>   
        <h2 className='font-bold text-xl'>Upskill at the pace of change and grow from there</h2>
        <p>Help  drive business outcomes with your learning strategy</p>
        </div>

      <article className='landing_page_article'>
          <div className='landing_page_article_img_div'>
            <img src={illustration_1} alt="illustration" />
          </div>

          <div>
            <h2 className='font-semibold text-lg my-5'>Engage, develop and retain your people</h2>
            <ul className='leading-8 list-disc'>
              <li>Cultivate a learning culture in our company</li>
              <li>Support your workkforce throughout the employee lifecycle</li>
              <li>Invest in your employee's growth and development</li>
            </ul>
          </div>

      </article>

      <article className='landing_page_article'>
          <div>
            <h2 className='font-semibold text-lg my-5'>Help your tech teams stay ahead</h2>
            <ul className='leading-8 list-disc'>
              <li>Bridge skill gaps to increase innovation and growth</li>
              <li>Keep your talent's skill current and competitive</li>
              <li>Prepare employess  for digital transformation</li>
            </ul>
          </div>

          <div className='landing_page_article_img_div'>
            <img src={illustration_2} alt="" />
          </div>
      </article>

      <article className='landing_page_article'>
          <div className='landing_page_article_img_div'>
            <img src={illustration_3} alt="" />
          </div>

          <div>
            <h2 className='font-semibold text-lg my-5'>Empower leaders and managers</h2>
            <ul className='leading-8 list-disc'>
              <li>Give them the tools to lead, motivate and engage hybrid teams</li>
              <li>Build the skills needed to suppor a culture of trust and inclusion</li>
              <li>Align leadership  teams through collaboration</li>
            </ul>
          </div>
      </article>

      <article className='landing_page_article'>
          <div>
            <h2 className='font-semibold text-lg my-5'>Engage, develop and retain your people</h2>
            <ul className='leading-8 list-disc'>
              <li>Cultivate a learning culture in our company</li>
              <li>Support your workkforce throughout the employee lifecycle</li>
              <li>Invest in your employee's growth and development</li>
            </ul>
          </div>

          <div className='landing_page_article_img_div'>
            <img src={illustration_4} alt="" />
          </div>
      </article>
    </section>
    <div style={{backgroundColor: "#4A24B8", height: "150px"}}></div>

    <footer className='landing_page_footer'>
      <div className='text-center my-10'>
      <h3 className='font-bold my-3 text-xl'>Transformative learning for every team</h3>
      <p>Meet all your learning needs, so you won't be left behind in latest business skills</p>
      </div>
      
        <ul>
          <li>
          <img src={graduatingIcon} alt="graduation Icon" />
          <h3>Learning and Development</h3>
          <p>Deliver L&D programs that upskill your entire workforce</p>
          </li>

          <li>
          <img src={handShakeIcon} alt="human recourses Icon" />
          <h3>Human Resources</h3>
          <p>Prepare your HR team to attract, grow and retain talent by equipping them with the tools and skills needed to do their work</p>
          </li>

          <li>
          <img src={engineeringIcon} alt="graduation Icon" />
          <h3>Engineering</h3>
          <p>Upgrade skills to stay ahead of the curve. Offer hands-on practice and training on cutting-edge technology</p>
          </li>

          <li>
          <img src={learningDevIcon} alt="graduation Icon" />
          <h3>Learning and Development</h3>
          <p>Deliver L&D programs that upskill your entire workforce</p>
          </li>

          <li>
          <img src={handShakeIcon} alt="human recourses Icon" />
          <h3>Human Human Resources</h3>
          <p>Prepare your HR team to attract, grow and retain talent by equipping them with the tools and skills needed to do their work</p>
          </li>

          <li>
          <img src={handShakeIcon} alt="graduation Icon" />
          <h3>Human Resources</h3>
          <p>Prepare your HR team to attract, grow and retain talent by equipping them with the tools and skills needed to do their work</p>
          </li>
        </ul>
      
    </footer>
    </>
  )
}

export default LandingPage