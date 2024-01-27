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
        options.push(html``);
      } else {
        options.push(html``);
      }
    }
    return options;
  }

  render() {
    return html`
      <div class="mt-6 flex items-center justify-center gap-x-3">
        ${
          !this.prevToken ?
            html`
            <button disabled type="button" class="text-sm font-semibold leading-6 text-gray-300">
              Previous
            </button>
            ` :
            html`
            <button type="button" class="text-sm font-semibold leading-6 text-blue-500">
              Previous
            </button>
            `
        }

        <p className="text-xs">
          per page /
          Showing ${(this.page - 1) * this.perPage + 1} - ${this.page * this.perPage} of ${this.total}
        </p>
        ${
          !this.nextToken ?
            html`
            <button disabled type="button" class="text-sm font-semibold leading-6 text-gray-300">
              Next
            </button>
            ` :
            html`
            <button type="button" class="text-sm font-semibold leading-6 text-blue-500">
              Next
            </button>
            `
        }
      </div>
    `;
  }
}
