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
  protected _loading = false;

  @state()
  protected _page = 1;
  @state()
  protected _perPage = 10;
  @state()
  protected _total = 100;
  @state()
  protected _nextToken = null;
  @state()
  protected _prevToken = null;

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
  
  handleSearch(e) {
    console.log(e.detail);
  }

  getSearchResults() {
    if(this._loading) {
      return html`<loading-wheel></loading-wheel>`;
    } else {
      return html`
        <search-results></search-results>
        <search-paging .page=${this._page} .perPage=${this._perPage} .total=${this._total}></search-paging>
      `;
    }
  }
  
  render() {
    return html`
      <div class="px-4 sm:px-6 lg:px-8">
        <youtube-search-builder @search=${this.handleSearch}></youtube-search-builder>
        ${this.getSearchResults()}
      </div>
    `;
  }
}
