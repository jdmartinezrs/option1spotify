import { LitElement, css, html } from 'lit'
import infinitLogo from "/mastercard-line.svg"
import userLogo from "/Ellipse 13.svg"

export class MyElement extends LitElement {
  

  constructor() {
    super();
  }

  render() {
    return html`
      <div class = "container">
        <nav class = "leftBar">
          <my-left-bar></my-left-bar>
        </nav>
        <div class = "leftSection">
          <my-left-section></my-left-section>
        </div>
        <div class = "middleSection">
          <my-middle-section></my-middle-section>
        </div>
        <div class = "rightSection">
          <my-right-section></my-right-section>
        </div>
      </div>
    `
  }

  static get styles() {
    return css`
      .container{
        display: grid;
        grid-template-columns: .2fr 1.5fr 2fr 1.5fr;
        height: 90vh; 
      }
      .leftBar{
        grid-column:1/2;
        background: red;
      }
      .leftSection{
        grid-column:2/3;
        background: blue;
      }
      .middleSection{
        grid-column: 3/4;
        background: yellow;
      }
      .rightSection{
        grid-column: 4/5;
        background: violet;
      }

      @media (max-width: 750px) {
        .container{
          grid-template-columns: 1fr;
        }
        .middleSection{
          grid-column:1/2;
          background: yellow;
        }
        .leftBar{
          display: none;
        }
        .leftSection{
          display: none;
        }
        .rightSection{
          display: none;
        }
      }
    `
  }
}

customElements.define('my-element', MyElement)

export class MyLeftBar extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="leftBar__user">
        <a href="#">
          <img src=${infinitLogo}>
        </a>
        <a href="#">
          <img src=${userLogo}>
        </a>
      </div>
      <hr>
      <div class="leftBar__options">
        <a href="#">
          <img src=${infinitLogo}>
        </a>
        <a href="#">
          <img src=${infinitLogo}>
        </a>
        <a href="#">
          <img src=${infinitLogo}>
        </a>
        <a href="#">
          <img src=${infinitLogo}>
        </a>
      </div>
      <div class="leftBar__exit">
        <a href="#">
          <img src=${infinitLogo}>
        </a>
        <a href="#">
          <img src=${userLogo}>
        </a>
      </div>
    `
  }

  static get styles() {
    return css`
      :host{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
      }
      img{
        width: 2.5em;
        height: auto;
      }
      .leftBar__user{
        display: flex;
        flex-direction: column;
        margin: 2em 0;
      }
      .leftBar__options{
        display: flex;
        flex-direction: column;
        margin-top: 2em;
        gap: 1em
      }
      .leftBar__exit{
        position: absolute;
        bottom: 5em;
        display: flex;
        flex-direction: column;
      }
    `
  }
}

customElements.define('my-left-bar', MyLeftBar); 

export class MyLeftSection extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="leftSection__title"></div>
      <div class="leftSection__topChart"></div>
      <div class="leftSection__mayLike"></div>
    `
  }

  static get styles() {
    return css`
      :host{
        display: grid;
        grid-rows: .5fr, 5fr, 5fr;
        height: 90vh;
        gap: 1em;
        padding: 1em;
      }
      .leftSection__title{
        margin-top: 1em;
        grid-rows: 1/2;
        background: black;
        max-height: 100px;
      }
      .leftSection__topChart{
        grid-rows: 2/3;
        background: green;
        min-height: 250px;
      }
      .leftSection__mayLike{
        grid-rows: 3/4;
        background: brown;
        min-height: 300px;
      }
    `
  }
}

customElements.define('my-left-section', MyLeftSection); 


export class MyMiddleSection extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = middleSection__container>
        <div class = "middleSection__title"></div>
        <div class = "middleSection__image"></div>
        <div class = "middleSection__songTitle"></div>
        <div class = "middleSection__barDuration"></div>
        <div class = "middleSection__bottons"></div>
        <div class = "middleSection__barVolume"></div>
        <div class = "middleSection__deviceReference"></div>
      </div>
    `
  }

  static get styles() {
    return css`
      .middleSection__container{
        display:grid;
        grid-template-rows: .2fr, 2fr, .35fr, .15fr, .45fr, .12fr, .2fr;
        gap: .5em;
        height: 90vh;
        padding: 1em;
      }
      .middleSection__title{
        grid-rows: 1/2;
        background: white;
        max-height: 40px;
      }
      .middleSection__image{
        grid-rows: 2/3;
        background: white;
        min-height: 300px;
      }
      .middleSection__songTitle{
        grid-rows: 3/4;
        background: white;
        
      }
      .middleSection__barDuration{
        grid-rows: 4/5;
        background: white;
        max-height: 25px;
        display: flex;
        align-items:center;
        justify-content: center;
      }
      .middleSection__bottons{
        grid-rows: 5/6;
        background: white;
        min-height: 30px;
      }
      .middleSection__barVolume{
        grid-rows: 6/7;
        background: white;
        max-height: 20px;
      }
      .middleSection__deviceReference{
        grid-rows: 7/8;
        background: white;
        max-height: 40px;
      }
    `
  }
}

customElements.define('my-middle-section', MyMiddleSection); 


export class MyRightSection extends LitElement {
  
  constructor() {
    super();
  }

  render() {
    return html`
      <div class = rightSection__container>
        <div class = "rightSection__title"></div>
        <div class = "rightSection__tools"></div>
        <div class = "rightSection__playingNext"></div>
        <div class = "rightSection__Songs"></div>
      </div>
    `
  }

  static get styles() {
    return css`
      .rightSection__container{
        display: grid;
        grid-template-rows: .2fr, .2fr, .15fr, 1fr;
        height: 90vh;
        padding: 1em;
        gap: .1em;
      }
      .rightSection__title{
        grid-rows:1/2;
        background: white;
        max-height: 40px;
      }
      .rightSection__tools{
        grid-rows:2/3;
        background: white;
        max-height: 40px;
      }
      .rightSection__playingNext{
        grid-rows:3/4;
        background: white;
        max-height: 20px;
      }
      .rightSection__Songs{
        grid-rows:4/5;
        background: white;
        min-height: 620px 
      }
    `
  }
}

customElements.define('my-right-section', MyRightSection); 

