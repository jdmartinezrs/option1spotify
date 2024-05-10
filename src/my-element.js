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
        <div class = "leftSection"></div>
        <div class = "middleSection">Hello section</div>
        <div class = "rightSection"></div>
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
    `
  }

  static get styles() {
    return css`
      *{
        display:flex;
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
    `
  }
}

customElements.define('my-left-bar', MyLeftBar); 

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
    `
  }

  static get styles() {
    return css`
      *{
        display:flex;
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
    `
  }
}

customElements.define('my-left-bar', MyLeftBar); 