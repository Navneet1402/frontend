import React from 'react'
import BackgroundImg from './70 Dark Guitar Player Wallpapers   Download at WallpaperBro.jpg'
import { Link, NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home'>
      <div className='container'>

        <div className='row'>Welcome Creator to our world of music</div>

      </div>
      <div>
        <h4>Upload your Music here</h4>
        <Link to="MusicUpload" className='btn btn-danger mt-1'>Upload</Link>
      </div>
      <div>
        <h4 className='heading '>Trending Now</h4>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Song Name</th>
              <th scope="col">Singer</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Chaleya</td>
              <td>Arjit singh</td>
              <td><Link to="ManageUser" className='btn btn-danger'>play</Link></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Alone</td>
              <td>Alan walker</td>
              <td><Link to="ManageUser" className='btn btn-danger'>play</Link></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Bewajah</td>
              <td>Atif</td>
              <td><Link to="ManageUser" className='btn btn-danger'>play</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='about'>About</div>
      <p className='about-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quae ratione exercitationem eum numquam odit. Fugit distinctio, quia et a maiores voluptate quibusdam quod enim autem quas totam blanditiis aspern</p>
      
    </div>
  )
}

export default HomePage