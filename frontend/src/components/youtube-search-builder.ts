import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

@customElement('youtube-search-builder')
export class YoutubeSearchBuiler extends LitElement {
  static styles = [TWStyles];

  @state()
  protected _advanced = false;
  
  toggleAdvanced() {
    this._advanced = !this._advanced;
  }
  
  getAdvancedSearchToggle() {
    if(this._advanced) {
      return html`
      <div class="flex items-center">
        <button type="button" class="bg-blue-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" role="switch" aria-checked="true" @click="${this.toggleAdvanced}">
          <span aria-hidden="true" class="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
        </button>
        <span class="ml-3 text-sm">
          <span class="font-medium text-gray-900">Advanced</span>
        </span>
      </div>
      `
    } else {
      return html`
      <div class="flex items-center">
        <button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" role="switch" aria-checked="false" @click="${this.toggleAdvanced}">
          <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
        </button>
        <span class="ml-3 text-sm">
          <span class="font-medium text-gray-900">Advanced</span>
        </span>
      </div>
      `
    }
  }
  
  getAdvancedSearchBox() {
    if(this._advanced) {
      return html`
      <div class="mt-2 flex justify-center gap-x-1.5">
        <div>
          <label for="publishedAfter" class="block text-sm font-medium leading-6 text-gray-900">Published After</label>
          <div class="mt-1">
            <input type="date" name="publishedAfter" id="publishedAfter" class="block w-full rounded-md border-0 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="">
          </div>
        </div>
        <div>
          <label for="publishedBefore" class="block text-sm font-medium leading-6 text-gray-900">Published Before</label>
          <div class="mt-1">
            <input type="date" name="publishedBefore" id="publishedAfter" class="block w-full rounded-md border-0 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="">
          </div>
        </div>
        <div>
          <label for="sortBy" class="block text-sm font-medium leading-6 text-gray-900">Sort By</label>
          <select id="sortBy" name="sortBy" class="mt-1 block w-full rounded-md border-0 py-1 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="date">Date</option>
            <option value="rating">Rating</option>
            <option value="relevance" selected>Relevance</option>
            <option value="title">Title</option>
            <option value="videoCount">Video Count</option>
            <option value="viewCount">View Count</option>
          </select>
        </div>
        <div>
          <label for="safesearch" class="block text-sm font-medium leading-6 text-gray-900">Safe Search</label>
          <select id="safesearch" name="safesearch" class="mt-1 block w-full rounded-md border-0 py-1 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="off">Off</option>
            <option value="moderate" selected>Moderate</option>
            <option value="strict">Strict</option>
          </select>
        </div>
      </div>
      `;
    } else {
      return html``;
    }
  }
  
  render() {
    return html`
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Video Search</h1>
          <p class="mt-2 text-sm text-gray-700">Search for YouTube videos with our native component demo.</p>
        </div>
        <div class="flex mt-4 sm:ml-16 sm:mt-0 gap-x-3">
          <input
            type="text"
            class="block rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button type="button" class="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Search</button>
          ${this.getAdvancedSearchToggle()}
        </div>
      </div>
      ${this.getAdvancedSearchBox()}
    `;
  }
}
