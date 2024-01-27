import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
// @ts-ignore
import { TWStyles } from './../tw.js';

@customElement('search-results')
export class SearchResults extends LitElement {
  static styles = [TWStyles];

  render() {
    return html`
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Thumbnail</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                    <th scope="col" class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
                    <th scope="col" class="hidden md:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Comment Count</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 w-1/5 lg:w-1/6"><img src="https://i.ytimg.com/vi/oqtnh-YMi98/default_live.jpg" width="120"/></td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-blue-500 text-wrap w-1/2 lg:w-2/6">🔴 LIVE: Baby&#39;s Family Are Losing Their Colors!? - 30 minutes Funniest and Cutest Babies Video</td>
                    <td class="hidden md:table-cell whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-wrap w-2/6">LycanArabic #family #color #Lycan #kidscartoons #toyskids #Kids #2dcartoon LIVE: Baby's Family Are Losing Their Colors!</td>
                    <td class="hidden md:table-cell md:visible whitespace-nowrap px-3 py-4 text-sm text-gray-500 w-1/6">
                      <div class="flex gap-x-1.5">
                        100
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
