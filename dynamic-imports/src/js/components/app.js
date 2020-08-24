import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'

console.log(data);
function App() {
  const [loaderList, setLoaderList] = useState([])
  async function handleClick() {
    setLoaderList(data.loaders)
    const { alerta } = await import('./alert.js')
    alerta('Este módulo ha cargado dinámicamente')
  }
  return (
    <div>
      <p className="less">Esto es Less</p>
      <p className="sass">Esto es Sass</p>
      <p className="stylus">Esto es Stylus</p>
      <p className="post-css">Esto es Postcss</p>
      Made in React.js
      <video src={video} width={360} controls poster={logo}></video>
      <p>
        <img src={logo} alt="" width={40}/>
      </p>
      <ul>
        {
          loaderList.map(item => <Loader {...item} key={item.id}/>)
        }
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </div>
  )
}

export default App