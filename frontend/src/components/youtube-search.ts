import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

import "./youtube-search-builder"
import "./search-results"
import "./search-paging"
import "./loading-wheel"

const SEARCH_WORKER = "YOUR_WORKER_URL_HERE";

@customElement('youtube-search')
export class YoutubeSearch extends LitElement {
  static styles = [TWStyles];

  @state()
  protected _loading = true;
  
  getSearchResults() {
    if(this._loading) {
      return html`<loading-wheel></loading-wheel>`;
    } else {
      return html`
      <search-results></search-results>
      <search-paging></search-paging>
      `;
    }
  }
  
  render() {
    return html`
      <div class="px-4 sm:px-6 lg:px-8">
        <youtube-search-builder></youtube-search-builder>
        ${this.getSearchResults()}
      </div>
    `;
  }
}
