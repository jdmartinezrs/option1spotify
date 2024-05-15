import { LitElement, html,css} from "lit";

class carrusel extends LitElement{
  static properties = {
    

  }

  constructor(){
    super();
    
  }

  static styles = css`

  * {
    font-family: Arial;
  }


  .titleyml{
    width:
    display:flex;
    //background: green;
    width: 300px;
  }

  .carrusell{
    //background: orange;
    width:330px;
    height:160px;
    overflow-y: auto;
    
  }

.lista__canciones{
  width: 300px;
    display:flex;
    flex-direction:row;
    //background: blue;
    justify-content: space-beetween;
    
  }

.lista__canciones img{
  width: 50px;
  height:50px;
  border-radius: 5px; 
}

.lista__canciones__li{
  font-size:16px;
  list-style: none;
  line-height: 2px;
  width: 190px;
  padding-left:10px;

 
}

.lista__canciones1{
  width: 300px;
    display:flex;
    //background: blue;
    justify-content: space-beetween;
    
  }

.lista__canciones__li1{
    list-style:none;
    padding-top:8px;
    padding-left:3px;
    font-size:16px;
  }


  
  `
 
  render(){
    return html`
<body>



  <div class="titleyml">
  <h4>You may like</h4>
  </div>


<div class="carrusell">

  <div class="lista__canciones"> 
  <img src="/img/uno.png">
  <div class= "lista__canciones__li">  
  <li><p>Static</p></li>
  <li><p><small>Godspeed You, Black Emperor</small></p></li>
    </div>
    <div class=lista__canciones__li1>
  <li>22:36</li>
  <li><small>2001<small></li>
    </div>
  </div>

  <div class="lista__canciones"> 
  <img src="/img/hem.png">
  <div class= "lista__canciones__li">  
  <li><p>Empathy</p></li>
  <li><p><small>Cristal Castles</small></p></li>
    </div>
    <div class=lista__canciones__li1>
  <li>4:16</li>
  <li><small>2014<small></li>
    </div>
  </div>

  <div class="lista__canciones"> 
  <img src="/img/mag.jpg">
  <div class= "lista__canciones__li">  
  <li><p>Magazine</p></li>
  <li><p><small>$uicideBoys</small></p></li>
    </div>
    <div class=lista__canciones__li1>
  <li>3:14</li>
  <li><small>2016<small></li>
    </div>
  </div>




 




  
 
 
  
  

     

     



</body>
    `
  }


  

    


    
    
    
  }

customElements.define("carru-sel", carrusel);
