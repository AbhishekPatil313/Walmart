import React from 'react';
import './App.css';
// import { MdContactPage } from "react-icons/md";
// import { FaBarsProgress } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa";
// import { FaExternalLinkAlt } from "react-icons/fa";

import CalendarInput from './components/CalenderInput';
const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <input type="text" placeholder="Search..." className="search-bar" />
        <input type="text" placeholder="Filter..." className="filter-bar" />
        <button className="search-button">Search</button>
        <button className="clear-button">Clear All</button>
        <button className="save-button">Save Search</button>
        <select className="dropdown">
          <option>My Searches & Alerts</option>
          <option>Search 1</option>
          <option>Search 2</option>
        </select>
      </nav>
      <div className="main-content">
        {/* First Section */}
        <div className="section scrollable-list first">
          <h2>Results 14,672</h2>
          <div className='company-name'>
          <img className='walmart-logo' src={"walmart.png"} alt="Logo" />
          Walmart Inc</div>
          <div className='document'>
          <p>Documents</p>
          <p>Date-Newest</p>
          </div>
          <ul>
            {Array.from({ length: 20 }, (_, i) => (
              <li key={i}>
                <div className='news-section'>
                {/* <MdContactPage />  */}
                <span>MT Newswire </span>
                {/* <FaBarsProgress /> */}
                <span>18 Dec 24</span>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laborum repellendus non aut temporibus fugiat.
                  </p>
                </div>
                </li>

              
            ))}
          </ul>
        </div>
        {/* Second Section */}
        <div className='section'>
          <p style={{color: "blue" , fontSize:"10px"}}>SMART SUMMARY</p>
          <p style={{fontWeight: "bold" , fontSize :"20px"}}>Company Summaries</p>  
          <div className='section-2-tabs'>
            <div className='section-2-subtabs'>
              <p>Earnings</p>
              <p>Research</p>
              <p>Expert Calls</p>
            </div>
          <div className='section-2-subtabs'>
            <p>Calender Input</p>
            <p>View Industry Summaries</p>
          </div>
          
          
          </div>

        <div className=" grid-container">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="grid-item">
              <span className='positives'>Positives</span>
              <hr></hr>
              <br></br>
              {/* <FaAngleRight /> */}
              Lorem ipsum dolor sapiente numquam reiciendis commodi repellat.
              <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>

                {/* <FaAngleRight /> */}
                Lorem ipsum dolor sapiente numquam reiciendis commodi repellat.
                <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>

               

                
            </div>
            
          ))}
        </div>
        <div className='last-box'>
        {/* <FaAngleRight /> */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, natus alias ipsam neque tenetur assumenda?
          <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>

        </div>
        </div>
        {/* Third Section */}
        <div className="section vertical-container">
        <div  className="vertical-item-2"></div>

           <div  className="vertical-item">
          
          <img className='walmart-logo-2' src={"walmart.png"} alt="Logo" />
          Walmart Inc         
             <p style={{color: "blue"}}>stock.walmart.com</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, accusantium est! Aut, hic porro?</p>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>value</span>
              </div>
           </div>
           <div  className="vertical-item">
           <p style={{fontWeight: "bold" , fontSize :"12px"}}>Financials</p>
           <p>Finalcials & Estimates</p>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>
                  {/* <FaExternalLinkAlt /> */}
                </span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>
                  {/* <FaExternalLinkAlt /> */}
                </span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>
                  {/* <FaExternalLinkAlt /> */}
                </span>
              </div>
            <p>Peers</p>
            <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>
                  {/* <FaExternalLinkAlt /> */}
                </span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>
                  {/* <FaExternalLinkAlt /> */}
                </span>
              </div>
              <div className='keyvalue'>
                <span className='key'>key</span>
                <span className='value'>
                  {/* <FaExternalLinkAlt /> */}
                </span>
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};
export default App;