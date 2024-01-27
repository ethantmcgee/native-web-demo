import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = [TWStyles];

  render() {
    return html`
      <p>
        This page is a demo of native web components by showing how they can be used to scrape YouTube's Search API.  The full source code can
        be found on <a class="underline text-blue-500" href="https://github.com/ethantmcgee/native-web-demo">Github</a>.
      <p>
    `;
  }
}
