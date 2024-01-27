import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

@customElement('search-paging')
export class SearchPaging extends LitElement {
  static styles = [TWStyles];

  render() {
    return html`
      <div class="mt-6 flex items-center justify-center gap-x-3">
        <button type="button" class="text-sm font-semibold leading-6 text-blue-500">
          Previous
        </button>
        <p className="text-xs">
          Showing 1 - 10 of 1000
        </p>
        <button type="button" class="text-sm font-semibold leading-6 text-blue-500">
          Next
        </button>
      </div>
    `;
  }
}
