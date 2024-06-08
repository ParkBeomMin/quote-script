import { QUOTE_LIST } from './quote.js'; // QUOTE_LIST 가져오기

class QuoteScript extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM 사용
  }

  connectedCallback() {
    this.render(); // 엘리먼트가 문서에 추가될 때 render 메서드 호출
  }

  static get observedAttributes() {
    return []; // 필요한 속성이 있다면 추가
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(); // 속성이 변경될 때마다 render 메서드 호출
  }

  render() {
    const randomIndex = Math.floor(Math.random() * QUOTE_LIST.length);
    const quoteObj = QUOTE_LIST[randomIndex];
    
    this.shadowRoot.innerHTML = `
      <style>
        .quote {
          font-family: Arial, sans-serif;
          font-size: 1.2em;
          margin: 10px;
          padding: 10px;
          background-color: #f9f9f9;
          border-left: 5px solid #ccc;
        }
        .author {
          text-align: right;
          font-style: italic;
          margin-top: 10px;
        }
      </style>
      <div class="quote">
        "${quoteObj.quote}"
        <div class="author">- ${quoteObj.name}</div>
      </div>
    `;
  }
}

customElements.define("quote-script", QuoteScript);
