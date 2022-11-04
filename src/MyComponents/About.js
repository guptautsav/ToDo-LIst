import React from 'react'

const About = () => {
  let mystyle={
    minHeight: "70vh",
    margin: "11px auto"
  }
  return (
    <div style={mystyle}>
        <h6>What ToDo Does?</h6>
        <p> 
        Todo List helps you organize your tasks. It's elegant design allows you to easily manage your everyday life in an efficient way.It lets you the list maker enjoy the process of giving yourself lots of jobs to do and then having the satisfaction of seeing them get ticked off.
        </p>
        <h6>Why It's Needed?</h6>
        <p>
        Adepts of time management say that a person won't do something unless they want it. And that's exactly how Todoy works. At the moment you're looking at the simplest to-do list that uses principles of human psychology to encourage you to actually get things done. It's a no-brainer!
        </p>
        <h6>Why Us?</h6>
        <p>
        There are thousands textbooks, articles, and software programs dedicated to efficient time management. This or that way, all of them use prioritization principle as the foundation technique and all of them pretend to be really working. They tell you to prioritize: but how and what?
        When procrastination takes over and it seems that a getaway is your last resort, start thinking. Try choosing one big thing, three medium things, and five small things that you need to do today. Inspire yourself and get positive results.
        </p>
    </div>
  )
}

export default About
