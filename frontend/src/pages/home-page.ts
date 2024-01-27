import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

import './../components/youtube-search.ts';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = [TWStyles];

  render() {
    return html`
      <youtube-search />
    `;
  }
}
