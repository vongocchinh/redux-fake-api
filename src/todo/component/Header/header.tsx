import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';
 const Header:React.FC=()=> {
    const history=useHistory();
    // console.log(history);
    
    const goBack:()=>void=()=>{
      history.goBack();
    }
    const goForWard:()=>void=()=>{
      history.goForward()
    }
    return (
        <div className="option">
        <span>
          <span onClick={goBack}><ArrowBackIcon/></span>
          <span onClick={goForWard}><ArrowForwardIcon/></span>
        </span>
      </div>
    )
}
export default Header;