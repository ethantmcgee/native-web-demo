import { LitElement, html, css } from 'lit';
import { property, customElement, property } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

@customElement('search-results')
export class SearchResults extends LitElement {
  static styles = [TWStyles];

  @property()
  protected headers = [];
  @property()
  protected items = [];

  getHeaders() {
    const items = [];
    for(const header of this.headers) {
      items.push(html`<th scope="col" class="text-wrap px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${header.css}">${header.name}</th>`);
    }
    return items;
  }

  getContent(item) {
    const items = []
    for(const header of this.headers) {
      let val = header.property(item);
      if(header.template) {
        val = header.template(val, item);
      }
      items.push(html`<td class="text-wrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 ${header.css}">${val}</td>`);
    }
    return html`<tr>${items}</tr>`;
  }

  render() {
    return html`
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    ${this.getHeaders()}
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  ${this.items.map(x => this.getContent(x))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
