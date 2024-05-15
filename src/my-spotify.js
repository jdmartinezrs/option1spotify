import { LitElement,html,css } from "lit";
class mySpotify extends LitElement{
    static properties= {
        track: {type:String}
    }
    static styles=  css `
    .track{
      width:100%;
      height: 500px; 
    }

    `; 
      


        // window.onSpotifyIframeApiReady=(IFrameAPI)=>{const element = document.getElementById('embed-iframe');
        // const options = {
        //     uri: 'spotify:episode:7makk4oTQe1546B0PZlDM5'
        // };
        // const callback = (EmbedController) =>{};
        // IFrameAPI.createController(element, options, callback);
        // };
    render(){
       return html`
       ${this.track}
    
     `
    } 
    async getTrack(){
        const config ={
            method: 'GET',
            headers: {
                'X-RapidApI-Key': '3f4c660f71msh5286a7e33f1ba8fp1428c3jsnc1252ecd5a6d',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }

        };
        let res = await fetch("https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv",config)
        let data = await res.json();
        
    }
connectedCallback(){
    this.getTrack();yy
}
    
}
customElements.define("my-spotify",mySpotify)