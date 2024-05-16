import { LitElement,html,css } from "lit";
class mySpotify extends LitElement{
    static styles = css `
    .track{
        displey:flex;
        padding-top:90px;
        align-items: center;
        width: 100%;
        height: 500px;
    }
    
    `;
    
 render(){
    return html`<iframe 
    class = "track"
    style="border-radius:12px" src="https://open.spotify.com/embed/album/3IBcauSj5M2A6lTeffJzdv"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
 }
 
} 
customElements.define("my-spotify", mySpotify)