import { LitElement, html, css } from 'lit';
import { property, customElement, property } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

const PER_PAGE_OPTIONS = [5, 10, 25, 50];

@customElement('search-paging')
export class SearchPaging extends LitElement {
  static styles = [TWStyles];

  @property()
  page?: number;
  @property()
  perPage?: number;
  @property()
  total?: number;
  @property()
  prevToken?: number;
  @property()
  nextToken?: number;

  getOptions() {
    const options = [];
    for(const option of PER_PAGE_OPTIONS) {
      if(this.perPage === option) {
        options.push(html`<option value="${option}" selected>${option}</option>`);
      } else {
        options.push(html`<option value="${option}">${option}</option>`);
      }
    }
    return options;
  }

  firePerPage(e) {
    this.dispatchEvent(new CustomEvent('perPage', {
      detail: {
        perPage: parseInt(e.target.options[e.target.selectedIndex].value)
      }
    }))
  }

  firePrev() {
    this.dispatchEvent(new CustomEvent('prev', {
      detail: {
        token: this.prevToken
      }
    }))
  }

  fireNext() {
    this.dispatchEvent(new CustomEvent('next', {
      detail: {
        token: this.nextToken
      }
    }))
  }

  render() {
    return html`
      <div class="mt-6 flex items-center justify-center gap-x-3">
        <div>
        ${
          !this.prevToken ?
            html`
            <button disabled type="button" class="text-sm font-semibold leading-6 text-gray-300">
              Previous
            </button>
            ` :
            html`
            <button type="button" class="text-sm font-semibold leading-6 text-blue-500" @click=${this.firePrev}>
              Previous
            </button>
            `
        }
        </div>
        <div class="grid grid-cols-1">
          <div class="flex justify-center">
            <p class="text-sm">
              Showing ${(this.page - 1) * this.perPage + 1} - ${this.page * this.perPage} of ${this.total}
            <p>
          </div>
          <div class="flex justify-center text-sm">
            <select id="sortBy" name="sortBy" class="mt-1 block rounded-md border-0 py-1 pl-1 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" @change=${this.firePerPage}>
              ${this.getOptions()}
            </select> <span class="mt-2 ml-1">per page</span>
          </div>
        </div>
        <div>
        ${
          !this.nextToken ?
            html`
            <button disabled type="button" class="text-sm font-semibold leading-6 text-gray-300">
              Next
            </button>
            ` :
            html`
            <button type="button" class="text-sm font-semibold leading-6 text-blue-500" @click=${this.fireNext}>
              Next
            </button>
            `
        }
        </div>
      </div>
    `;
  }
}
