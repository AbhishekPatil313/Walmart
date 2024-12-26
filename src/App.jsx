import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import fetchData from './components/fetchData';
// import { MdContactPage } from "react-icons/md";
// import { FaBarsProgress } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa";
import { use } from 'react';
// import { FaExternalLinkAlt } from "react-icons/fa";

// import CalendarInput from './components/CalenderInput';
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [final_data , setFinalData]=useState([]);
  const [Id,setId] =useState(null);
  const [trig , setTrig] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const records = await fetchData();
      setData(records);
      setLoading(false);
    };

    getData();
  }, []); // Runs once when the component is mounted

  if (loading) return <p>Loading...</p>;
  // if(loading)console.log(data);
  

const handleChange = (event) => {
  setTrig(false);
  if(event.target.value === '1')setId(123);
  if(event.target.value==='2')setId(124);
  
};
const filtered_document = data.filter((doc) => doc.account_id === Id);
  console.log(data);

  const handleChange2 = (event)=>{
    setTrig(true);

    if(event.target.value === '1'){
      let final_data=data.filter((doc) => doc.quarter === 1 && doc.account_id === Id);
      setFinalData(final_data);
    }
    else if(event.target.value === '2'){
      let final_data=data.filter((doc) => doc.quarter === 2 && doc.account_id === Id);
      setFinalData(final_data);
      // console.log(filtered_document);
      // final_data.map((doc, index) => (
      //   console.log(doc)
      // ))
       console.log("this is final data : ",final_data)

    }
    else if(event.target.value === '3'){
      let final_data=data.filter((doc) => doc.quarter === 3 && doc.account_id === Id);
      setFinalData(final_data);
    }
    else if(event.target.value === '4'){
     let  final_data=data.filter((doc) => doc.quarter === 4 && doc.account_id === Id);
     setFinalData(final_data);
    }
  
  }
  return (
    <div className="app-container">
      <nav className="navbar">
        <input type="text" placeholder="Search..." className="search-bar" />
        <input type="text" placeholder="Filter..." className="filter-bar" />
        <button className="search-button">Search</button>
        <button className="clear-button">Clear All</button>
        <button className="save-button">Save Search</button>
        <select className='dropdown' onChange={handleChange}>
        <option value="1">walmart</option>
        <option value="2">amazon</option>
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
          <select className='dropdown' onChange={handleChange2}>
         <option value="1">Quarter 1</option>
          <option value="2">Quarter 2</option>
          <option value="3">Quarter 3</option>
          <option value="4">Quarter 4</option>
          </select>
            <p>View Industry Summaries</p>
          </div>
          
          
          </div>

        <div className=" grid-container">
          
            <div  className="grid-item">
              <span className='positives'>Positives</span>
              <hr></hr>
              <br></br>
             
    {trig ? <>
      {final_data.map((doc, index) => (
                <>
                <>{doc.positives.map((sentence)=>(
                  <>
                  
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
    
    </> : <>
    
      {filtered_document.map((doc, index) => (
                <>
                <>{doc.positives.map((sentence)=>(
                  <>
                  
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
    
    </>}    
              <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>   
            </div>
            <div  className="grid-item">
              <span className='positives'>Negatives</span>
              <hr></hr>
              <br></br>
           
              {trig ? <>
      {final_data.map((doc, index) => (
                <>
                <>{doc.negative.map((sentence)=>(
                  <>
                  
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
    
    </> : <>
    
      {filtered_document.map((doc, index) => (
                <>
                <>{doc.negative.map((sentence)=>(
                  <>
                  
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
    
    </>}   
              <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>   
            </div>
            <div  className="grid-item">
              <span className='positives'>Overall</span>
              <hr></hr>
              <br></br>
              {/* <FaAngleRight /> */}
              {trig ? <>
      {final_data.map((doc, index) => (
                <>
                <>{doc.overall.map((sentence)=>(
                  <>
                  
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
    
    </> : <>
    
      {filtered_document.map((doc, index) => (
                <>
                <>{doc.overall.map((sentence)=>(
                  <>
                  
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
    
    </>}   
              <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>   
            </div>
            <div  className="grid-item">
              <span className='positives'>Positives</span>
              <hr></hr>
              <br></br>
              {/* <FaAngleRight /> */}
              {final_data.map((doc, index) => (
                <>
                <>{doc.overall.map((sentence)=>(
                  <>
                  <p> {sentence}</p>
                  </>
                ))}</>
                </>
              ))}
              <p className='grid-item-date'>19 Nov 24 'Walmart Inc, Q3 2025 , Nov 19 ,2024'</p>   
            </div>
         
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

















