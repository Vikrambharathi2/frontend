import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
export default function Search(){
    const[keyword, setKeyword] = useState("")
    const navigate = useNavigate();
    
    const searchHandler = ()=>{
           navigate('/search?keyword='+keyword)
    }



    return       <div className="input-group text-center mr-md-5 mx-3  mt-2  ">
    <input 
      type="text"
      id="search_field"
      onChange={(e)=>{
        setKeyword(e.target.value)
      }}
      className="form-control mr-md-1"
      onBlur={searchHandler}
      placeholder="Search here ..."
    />
    <div className="input-group-append ">
      <button onClick={searchHandler} id="search_btn" className="btn ">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  </div>
}