import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}> </div>
        <div className="aboutBottom"> 
            <h1 className='p1'>ABOUT US</h1>
            <p className='p1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis exercitationem neque aut corporis ullam, numquam cum error unde iure perferendis recusandae et nulla sapiente hic sed, adipisci totam est? Aspernatur corporis non suscipit molestias accusantium dignissimos eveniet eos rem. Ratione error odit quis veniam hic ex necessitatibus fugiat tenetur sint similique, harum aperiam est qui id veritatis inventore perferendis. Recusandae, autem eos veniam quis quod quo dignissimos libero optio, numquam nesciunt, quisquam sint velit quaerat error dicta unde iste beatae vitae non est hic dolor. Maiores praesentium, a odit, quia veritatis nihil ratione laboriosam tempora magni corrupti quod nesciunt blanditiis.</p>
        </div>
    </div>
  )
}

export default About
