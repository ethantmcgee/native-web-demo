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
  protected _pageToken = true;

  @state()
  protected _headers = [{
    "name": "Thumbnail",
    "css": "w-1/3 lg:w-1/6",
    "property": (x) => x.snippet?.thumbnails?.default?.url,
    "template": (x, item) => html`
    <img src="${x}" width="120"/>
    `
  }, {
    "name": "Title",
    "css": "text-blue-500 w-2/3 lg:w-2/6",
    "property": (x) => x.snippet?.title,
    "template": (x, item) => html`
    <a class="text-blue-500 underline" href="https://www.youtube.com/watch?v=${item.id.videoId}">
      ${x}
    </a>
    `
  }, {
    "name": "Description",
    "css": "hidden md:table-cell text-gray-500 lg:w-2/6",
    "property": (x) => x.snippet?.description
  }, {
    "name": "Comment Count",
    "css": "hidden md:table-cell lg:w-1/6",
    "property": (x) => x.statistics?.commentCount,
    "template": (x, item) => x ? html`
    <div class="flex gap-x-1.5">
      ${x}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    </div>
    ` : html``
  }];
  @state()
  protected _items = [];
  
  handlePrev(e) {
    this._page--;
    this._pageToken = e.detail.token;
    this.doSearch();
  }

  handlePerPage(e) {
    this._page = 1;
    this._pageToken = null;
    this._perPage = e.detail.perPage;
    this.doSearch();
  }

  handleNext(e) {
    this._page++;
    this._pageToken = e.detail.token;
    this.doSearch();
  }

  handleSearch(e) {
    this._page = 1;
    this._pageToken = null;
    this._search = e.detail;
    this.doSearch();
  }

  doSearch() {
    this._loading = true;
    fetch(SEARCH_WORKER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...this._search,
        maxResults: this._perPage,
        pageToken: this._pageToken
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      this._items = data.items;
      this._prevToken = data.prevPageToken;
      this._nextToken = data.nextPageToken;
      this._total = data.pageInfo.totalResults;
      this._loading = false;
    })
    .catch((e) => {
      this._items = [];
      console.log(e);
      this._loading = false;
    })
  }

  firstUpdated() {
    this.doSearch();
  }

  getSearchResults() {
    if(this._loading) {
      return html`<loading-wheel></loading-wheel>`;
    } else {
      return html`
        <search-results .headers=${this._headers} .items=${this._items}></search-results>
        <search-paging .page=${this._page} .perPage=${this._perPage} .total=${this._total} .prevToken=${this._prevToken} .nextToken=${this._nextToken} @prev=${this.handlePrev} @next=${this.handleNext} @perPage=${this.handlePerPage}></search-paging>
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
