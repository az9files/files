(function () {
  const template = document.createElement('template')
  template.innerHTML = `
    <style></style>
    <div id="root" style="width: 100%; height: 100%; color: blue;">
      test
    </div>
  `

  class JasonWebPage extends HTMLElement {
    constructor () {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }

  customElements.define('com-sap-jasonwebpage', JasonWebPage)
})()
