import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

import "./youtube-search-builder"
import "./search-results"
import "./search-paging"
import "./loading-wheel"

const SEARCH_WORKER = "https://youtube-searcher.bulletshot60.workers.dev/";

@customElement('youtube-search')
export class YoutubeSearch extends LitElement {
  static styles = [TWStyles];

  @state()
  protected _loading = true;

  @state()
  protected _page = true;
  @state()
  protected _perPage = true;
  @state()
  protected _nextToken = true;
  @state()
  protected _prevToken = true;

  @state()
  protected _search = true;

  @state()
  protected _headers = [{
    "name": "Title",
    "css": "",
    "property": (x) => x.title,
    "template": (x, item) => html``
  }, {
    "name": "Title",
    "css": "",
    "property": (x) => x.title,
    "template": (x, item) => html``
  }, {
    "name": "Title",
    "css": "",
    "property": (x) => x.title,
    "template": (x, item) => html``
  }, {
    "name": "Title",
    "css": "",
    "property": (x) => x.title,
    "template": (x, item) => html``
  }];
  @state()
  protected _items = [];
  
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
