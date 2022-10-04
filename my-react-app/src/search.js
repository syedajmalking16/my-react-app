import React ,{useState} from 'react';
import './App.css';
import Chip from '@mui/material/Chip';
import data from './data';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import img6 from './images/6.png'
import img7 from './images/7.png'
import img8 from './images/8.png'
import imgw01 from './images/01.webp'
import imgw02 from './images/02.webp'
import imgw03 from './images/03.webp'
import imgw04 from './images/04.webp'
import imgw1 from './images/1.webp'
import imgw2 from './images/2.webp'
import imgw3 from './images/3.webp'
import img1a1 from './images/1.1.png'
import img1a2 from './images/1.2.jpg'
import img1a3 from './images/1.3.jpg'
import img2a1 from './images/2.1.jpg';
import img2a2 from './images/2.2.jpg';
import img2a3 from './images/2.3.jpg';
import img3a1 from './images/3.1.png';
import img3a2 from './images/3.2.jpg';
import img3a3 from './images/3.3.jpg';
import img4a1 from './images/4.1.webp';
import img4a2 from './images/4.2.webp';
import img4a3 from './images/4.3.webp';
import img5a1 from './images/5.1.jpg';
import img5a2 from './images/5.2.jpg';
import img5a3 from './images/5.3.webp';
import img6a1 from './images/6.1.jpg';
import img6a2 from './images/6.2.jpg';
import img6a3 from './images/6.3.webp';
import imgS1 from './images/sec1.webp';
import imgS2 from './images/sec2.webp';
import imgS3 from './images/sec3.webp';
import imgS4 from './images/sec4.webp';
import imgS5 from './images/sec5.webp';
import imgS6 from './images/sec6.webp';
import imgS7 from './images/sec7.webp';
import imgS8 from './images/sec8.webp';
import imgS9 from './images/sec9.webp';
import imgS10 from './images/10.webp';
import imgS11 from './images/sec11.webp';
import imgS12 from './images/12.webp';


const Search = () =>{
    const[items, setItem] = useState(data);

    const filterItem = (categItem) =>{
        const updatedItem = data.filter((currElem)=>{
         return currElem.title === categItem;    
        });
        setItem(updatedItem);
    }

return (
     <>
     <Chip label="Samsung" onClick ={()=> filterItem('Samsung')} variant="outlined"/>
     <Chip label="I Phone" onClick ={()=> filterItem('I Phone')} variant="outlined" />
     <Chip label="Infinix" onClick ={()=> filterItem('Infinx')} variant="outlined" />
     <Chip label="Tecno" onClick ={()=> filterItem('Tecno')} variant="outlined" />
     <Chip label="Honda" onClick ={()=> filterItem('Honda')} variant="outlined" />
     <Chip label="Suzuki" onClick ={()=> filterItem('Suzuki')} variant="outlined" />
     <Chip label="Kawasaki" onClick ={()=> filterItem('Kawaski')} variant="outlined" />
     <Chip label="Super Power" onClick ={()=> filterItem('Super Power')} variant="outlined" />
     <Chip label="Civic" onClick ={()=> filterItem('Civic')} variant="outlined" />
     <Chip label="Audi" onClick ={()=> filterItem('Audi')} variant="outlined" />
     <Chip label="Sport" onClick ={()=> filterItem('Mercedes')} variant="outlined" />
     <Chip label="Mercedes" onClick ={()=> filterItem('Mercedes')} variant="outlined" />
     <Chip label="All" onClick ={()=> setItem(data)} variant="outlined" />
     <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid m-0 p-0">
            <a className="navbar-brand" href="#">
              <img src="data:image/png;base64,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" width="80px" />
             </a>
            <div className="me-auto ms-5">
              <form className="d-flex" role="search">
                <input className="form-control w-5 rounded-4 me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-danger rounded-5 ms-1" type="submit">Search</button>
              </form>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"><i className="fa-regular fa-user d-flex mt-3 fs-3">
                    </i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  </a><p className="fs-6 "><a className="nav-link" href="#"> <i className="fa-solid fa-message fs-3" />
                    </a>
                  </p></li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa-solid fa-cart-arrow-down fs-3 mt-3" /></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* section1end */}
        {/* section2start */}
        <div>
          <ul className="d-inline">
            <li> <i className="fa-solid fa-align-justify"/> Category</li>
            <li>Ready to Ship</li>
            <li>personal Protective</li>
            <li>Buyer Central</li>
            <li>Sell on Ali Baba</li>
            <li>Help</li>
          </ul>
          <ul className="d-inline">
            <li className="halp">English-USD</li>
            <li className="help">Ship to <i className="fa-solid fa-flag" /></li>
          </ul>
        </div>
        {/* section2end */}
        {/* section3start */}
        <div className="container-fluid p-0 pt-4 h-4 ">
          <div className="row">
            <div className="col">
              <p className="ms-5">Mid Year Sale</p>
            </div>
            <div className="col">
              <p> <i className="fa-solid fa-percent" />
                Excellent Discount</p>
            </div>
            <div className="col">
              <p> <i className="fa-solid fa-star" />
                Lowest price in the <br /> last days</p>
            </div>
            <div className="col">
              <p><i className="fa-solid fa-bolt" />
                on-the delivery guaranty</p>
            </div>
            <div className="col">
              <button type="button" className="btn btn-danger rounded-5">Sources</button>
            </div>
          </div>
        </div>
        {/* section3 end*/}
        {/* section4start */}
        <div className="container ms-5 w-100 m-2 mt-2 m-0 p-0 border-5 ">
          <div className="row">
            <div className="col-md-3">
              <h6> My markets</h6>
              <ul className="p-0">
                <li><img src={img1} width="20%" />Consumer Electronic</li>
                <li><img src={img2} width="30%" />Aparel</li>
                <li><img src={img3} width="20%" />Vehical pats and accesorise</li>
                <li><img src={img4} width="15%" />Sport and Entertainment</li>
                <li><img src={img5} width="22%" />Machinery</li>
                <li><img src={img6} width="20%" />Home and Garden</li>
                <li><img src={img7} width="18%" />beuty and personal</li>
                <li><img src={img8} width="15%" /> All cetagory</li>
              </ul>
            </div>
            <div className="col-md-6 ">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner  ">
                  <div className="carousel-item active">
                    <img src={imgw01} className="d-block w-100" height={380} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgw02} className="d-block w-100" height={380} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgw03} className="d-block w-100" height={380} alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={imgw04} className="d-block w-100" height={380} alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <ul className="p-0">
                <li>Buyer Club <br /> US $10 Of with A New Suppleir</li>
              </ul>
              <button type="button" id="btt" className="btn btn-dark rounded-5  btn-sm ms-5">View More</button>
              <button type="button" className="btn btn-danger btn-sm m-4 col-md-12 ">Mid Year Sale</button>
              <p className="fw-bold ms-3">Hot Sallers<img className="ms-5" src={imgw1} width="20%" /></p>
              <hr />
              <p className="fw-bold ms-3">New trends release<img className="ms-2" src={imgw2} width="20%" /></p>
              <hr />
              <p className="fw-bold ms-3">10% off or More<img className="ms-2" src={imgw3} width="20%" /></p>
            </div>
          </div>
        </div>
        {/* section4end */}
        <div>
         <section className="py-4 container">
         <div className="row justify-content-center">
            {
           items.map((elem)=>{
                const { img, title, desc} = elem;
                return (
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mt-4">
                       <div className="card p-0 overflow-hidden h-100 shadow">
                          <img src={img} className="card-img-top img-fluid" />
                          <h5 className="card_title text-center">{title}</h5>
                          <p className="card_text text-center">{desc}</p>
                       </div>
                    </div>
                 );
            })
            }
            </div>
         </section>
        </div>
        {/* section5start */}
        <div className="countainer ps-5 p-2">
          <div className="row bg-light">
            <div className="col-md-4">
              <p className="fw-bold">New Arrival</p>
              <img className="rounded-4 border border-2" src={img1a1} width="100px" />
              <img className="rounded-4 border border-2" src={img1a2} width="100px" />
              <img className="rounded-4 border border-2" src={img1a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold">Top-ranked Products</p>
              <img className="rounded-4 border border-2" src={img2a1} width="100px" />
              <img className="rounded-4 border border-2" src={img2a2} width="100px" />
              <img className="rounded-4 border border-2" src={img2a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold">Personal Protective Equipment </p>
              <img className="rounded-4 border border-2" src={img3a1} width="100px" />
              <img className="rounded-4 border border-2"  src={img3a2} width="100px" />
              <img className="rounded-4 border border-2"  src={img3a3} width="100px" />
            </div>
          </div>
        </div>
        <div className="countainer ps-5 pt-4 p-2">
          <div className="row bg-light">
            <div className="col-md-4">
              <p className="fw-bold">Dropshipping</p>
              <img className="rounded-4 border border-2" src={img4a1} width="100px" />
              <img className="rounded-4 border border-2" src={img4a2} width="100px" />
              <img className="rounded-4 border border-2" src={img4a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold"> Global Original Sources</p>
              <img className="rounded-4 border border-2" src={img5a1} width="100px" />
              <img className="rounded-4 border border-2" src={img5a2} width="100px" />
              <img className="rounded-4 border border-2" src={img5a3} width="100px" />
            </div>
            <div className="col-md-4">
              <p className="fw-bold"> True View </p>
              <img className="rounded-4 border border-2"  src={img6a1} width="100px" />
              <img className="rounded-4 border border-2"  src={img6a2} width="100px" />
              <img className="rounded-4 border border-2"  src={img6a3} width="100px" />
            </div>
          </div>
        </div>
        {/* section5end */}
        {/* section6start */}
        <div className="container">
          <h3 className="pt-3">JUST FOR YOU</h3>
          <div className="row">
            <div className="col-md-2 p-0">
              <img src={imgS1} width="170px " />
              <li>2021 Summer Fashion Women's Casual XL 4XL. <br />
                <b> $15.70 - $16.70 </b><br />
                5 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS2} width="170px " />
              <li>Santa Claus outside snow music box crystal ball girl gift. <br />
                <b> $6.40 </b><br />
                90 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS3} width="170px " />
              <li>Chakela Crystal Jade Chakra Combination Set Pink Crystal. <br />
                <b> $0.10 - $6.90</b> <br />
                1.0 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS4} width="170px " />
              <li>2022 Amazon Summer European And American Girls. <br />
                <b>$3.60 - $3.90</b> <br />
                20 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS5} width="170px " />
              <li>High Precision Quality Gas Station Garage Prefab Frame. <br />
                <b>$1,799.00 - $2,999.00</b> <br />
                1.0 Sets (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS6} width="170px " />
              <li>2022 New Matching Cheap Swimwear Designer. <br />
                <b> $12.20 - $19.90</b><br />
                5 Pieces (Min. Order)
              </li>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-2 p-0">
              <img src={imgS7} width="170px " />
              <li>Fashion Women Bohemian Dresses Spring Summer <br />
                <b> $4.98 - $6.19</b> <br />
                1 Piece (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS8} width="170px " />
              <li>Exquisite steel structure perfab house container. <br />
                <b>$1,300.00 - $2,500.00</b> <br />
                1.0 Units (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS9} width="170px " />
              <li>Portable beachwear thin girls bathing suit swimwear. <br />
                <b>$7.44 - $8.49</b><br />
                2 Sets (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS10} width="170px " />
              <li>Cold Kettle Glass Household Large Capacity Pot Heat. <br />
                <b>$4.90 - $19.00</b> <br />
                2 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS11} width="170px " />
              <li>Harbour Luxury Linen Fabric Folding Small Pet Dog Cat. <br />
                <b> $8.80 - $16.00</b> <br />
                2 Pieces (Min. Order)
              </li>
            </div>
            <div className="col-md-2 p-0">
              <img src={imgS12} width="170px " />
              <li>Statue of liberty souvenirs home furnishings. <br />
                <b> $2.27 - $5.72</b> <br />
                12 Pieces (Min. Order)
              </li>
            </div>
          </div>
        </div>
        {/* section6end */}
        {/* footerstart */}
        <footer>
          <div className="main text-bg-dark p-3">
            <div className="text-center">
              <li>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</li>
              <br />
              <input className="rounded-0" type="email" placeholder="Your Email" id="my" name="email" />
              <button type="button" className="btn btn-outline-light btn-sm m-1 p-1 ">Subscribe</button>
            </div>
            <div className="countainer pt-4">
              <div className="row ps-5 m-4 ms-5 ">
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Customer Services</p>
                  <ul className="p-1">
                    <li>Help Center</li> <br />
                    <li>Report Abuse</li> <br />
                    <li>Submit a Dispute</li> <br />
                    <li>Policies &amp; Rules</li> <br />
                    <li>Get Paid for Your Feedback</li> <br />
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">About Us</p>
                  <ul className="p-1">
                    <li>About Alibaba.com</li> <br />
                    <li>About Alibaba Group</li> <br />
                    <li>Sitemap</li> <br />
                    <li>Alibaba.com Blog</li> <br />
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Source Alibaba.com</p >
                    <ul className="p-1">
                      <li>Resources</li> <br />
                      <li>All Categories</li> <br />
                      <li>Request for Quotation</li> <br />
                      <li>Ready to Ship</li> <br />
                      <li>Buyer Partners</li> <br />
                    </ul>
                  <p className="m-0"/></div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Sell Alibaba.com</p>
                  <ul className="p-1">
                    <li>Supplier Memberships</li> <br />
                    <li>Learning Center</li> <br />
                    <li>Partner Program</li> <br />
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="m-0 p-0 ps-4">Trade Services</p>
                  <ul className="p-1">
                    <li>Trade Assurance</li> <br />
                    <li>Business Identity</li> <br />
                    <li>Logistics Service</li> <br />
                    <li>Production Monitoring</li> <br />
                    <li>Letter of Credit</li> <br />
                  </ul>
                </div>
                <hr />
              </div>
            </div>
            <div className="text-center">
              <h3>Follow Us</h3>
              <i className="fa-brands p-2 fs-1 fa-facebook" />
              <i className="fa-brands p-2 fs-1 fa-instagram" />
              <i className="fa-brands p-2 fs-1 fa-tiktok" />
              <i className="fa-brands p-2 fs-1 fa-linkedin-in" />
              <i className="fa-brands p-2 fs-1 fa-twitter-square" />
              <i className="fa-brands p-2 fs-1 fa-youtube" />
            </div>
            <div>
              <li className="text-center pt-1 p-5 ">Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress |
                Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World
                Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba
                Security
                <br /> Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate <br />
                Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information
                Legal Enquiry Guide
              </li>
            </div>
          </div>
        </footer>
   
      </div>
   </> 
    );
        }  
  


export default Search;
