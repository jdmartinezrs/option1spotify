import { LitElement, html,css} from "lit";

class titlepro extends LitElement{
  static properties = {
    
  }

  constructor(){
    super();
    
  }

  static styles = css`

  * {
    font-family: Arial;
  }



h1{
 //background-color: red;
 width:180px;
 padding-left:20px;
}













  
  `
 
  render(){
    return html`
<body>
<div class="music__container"> 

    <header>
        <h1>Discover New music</h1>
        <div class="top__chart">
            <h4>Top-chart</h4>
            <select>
                <option>Week</option>
            </select>
        </div>
    </header>



    `
  }
   
  }

customElements.define("title-pro", titlepro);