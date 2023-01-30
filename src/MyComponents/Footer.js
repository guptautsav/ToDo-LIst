import React from 'react'

const Footer = () => {
  let footerStyle={
    position: "relative",
    top: 0,
    width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <h5 className="credit text-center">
        Created With ❤️ By &nbsp;
        <a href="https://www.linkedin.com/in/anubhav-9jan/">Anubhav Modi</a>
      </h5>
      <p className='text-center'>
        MyToDo.com &copy; Copyright 2022
      </p>
    </footer>
  )
}

export default Footer
