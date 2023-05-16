import React from 'react'
import imagehero from "../assets/heroimg.png";
const Aboutus = () => {
  return (
    <div>
         <div className="container mt-5">
      <div className="row">
      <h2 className="fw-bold text-uppercase text-center mt-5">
        Learn more <span style={{ color: '#373B61' }}>About Us</span>
      </h2>
        <div className="col-lg-12 d-flex">
          <div className="col-lg-6 mt-5">
            <img src={imagehero} className="img-fluid mt-5 mx-lg-5" alt="Hero image" height="400" width="400" />
          </div>
          <div className="col-lg-6 mt-5">
          <p className="mt-4 mx-5" style={{fontStyle: 'normal', color: '#808080'}}>
              You can experience the shopping as you like to feel <br />
              the real combination of your desire item <br />
              cheers.
            </p>
            <p className="mt-4 mx-5" style={{ fontStyle: 'normal', color: '#808080' }}><span style={{ color: '#B20A0D' }}>&#10004;&#10004;</span> Home Products</p>
            <p className="mx-5" style={{ fontStyle: 'normal', color: '#808080' }}><span style={{ color: '#B20A0D' }}>&#10004;&#10004;</span> E-Products</p>
            <p className="mx-5" style={{ fontStyle: 'normal', color: '#808080' }}><span style={{ color: '#B20A0D' }}>&#10004;&#10004;</span> Clothing-Products</p>

            <div className="mx-5 mt-5">
              <iframe width="300" height="200" src="https://www.youtube.com/embed/DkivMwexzyA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              {/* <div className="mt-3 text-center">
                <button className="btn btn-primary mx-2" onClick={() => document.getElementsByTagName('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')} style={{ backgroundColor: 'red' }}>Play</button>
                <button className="btn btn-danger mx-2" onClick={() => document.getElementsByTagName('iframe')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')} style={{ backgroundColor: 'red' }}>Stop</button>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Aboutus
