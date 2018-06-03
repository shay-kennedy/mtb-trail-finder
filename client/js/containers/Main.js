import React from 'react'


const Main = (props) => {
  return (
    <div>
      <div className="container">
        {props.children}
      </div>
      <footer className='footer'>
        <small>Copyright 2018 <a href='http://www.findmytrails.com'>FindMyTrails.com</a>.</small><br/>
        <small>Copyright 2012 <a href='http://www.trailapi.com'>TrailAPI</a>.</small>
      </footer>
    </div>
  )
}

export default Main
