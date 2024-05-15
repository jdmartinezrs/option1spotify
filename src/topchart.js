

import { LitElement, html,css} from "lit";

class topchart extends LitElement{
  static properties = {
    
  }

  constructor(){
    super();
    
  }

  static styles = css`

  * {
    font-family: Arial;
  }

  .music__container {
    
    width: 300px;
    height: 350px;
   
    padding-top: 2px;
    color: black; 
    
   
    
}




.top__chart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  height: 10px;
 
}



.album {
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  row-gap: 10px;
  flex-wrap: wrap;
}




.album__1{

  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  
}

.album__1__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__1 img{
  width: 115px;
  height:115px;
  border-radius: 10px; 

  }

.album__2{
  
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
 //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 

}

.album__2__list{
  
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__2 img{
  width: 115px;
  height:115px;
  border-radius: 10px; 
  
  }

.album__3{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
  
}

.album__3__list{
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__3 img{
width: 115px;
height:115px;
border-radius: 10px; 

}

.album__4{
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  //background: blue;
  justify-content: end;
  align-items:center;
  border-radius: 10px; 
}

.album__4__list{
  list-style: none;
  line-height: 15px;
  width: 150px;
}

.album__4 img{
  width: 115px;
  height:115px;
  border-radius: 10px; 

  }

   
  `
 
  render(){
    return html`
<body>
<div class="music__container"> 

<header>

<div class="top__chart">
    <h4>Top-chart</h4>
    <select>
        <option>Week</option>
    </select>
</div>
</header>

    

  <div class="album">
 
  

    <div class="album__1">
    <ul class="album__1__list">
    <img src="/img/com.png">
        <li>OK Computer</li>
        <li><small>Radiohead, 1997</small></li>
    </ul>
  </div>



  <div class="album__2">
  <ul class="album__2__list">
  <img src="/img/rain.png">
      <li>In Rainbows</li>
      <li><small>Radiohead, 2004</small></li>
  </ul>
  </div>


  <div class="album__3">
<ul class="album__3__list">
  <img src="/img/bell.png">
      <li>The Division Bell</li>
      <li><small>Pink Floyd, 1994</small></li>
  </ul>
  </div>


  <div class="album__4">
  
  <ul class="album__4__list">
  <img src="/img/cc.png">
      <li>Crystal Castles I</li>
      <li><small>Crystal Castles, 2008</small></li>
  </ul>
  </div>


  

</body>
    `
  }
   
  }

customElements.define("top-chart", topchart);









