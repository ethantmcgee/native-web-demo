import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './tw.js';

const SEARCH_WORKER = "YOUR_WORKER_URL_HERE";

@customElement('page-base')
export class PageBase extends LitElement {
  static styles = [TWStyles];
  
  render() {
    return html`
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    `;
  }
}
