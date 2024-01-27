# Native Component Web Demo

## Purpose

This project provides a demonstration of native web components to make
a YouTube search page using [YouTube's APIs](https://developers.google.com/youtube/v3/docs/).
The boilerplate for the project was generated by using [Open WC](https://open-wc.org/).
The project is also styled using [Tailwind CSS](https://tailwindcss.com/).

UI Components copied from [Tailwind UI](https://tailwindui.com/) and [Loading IO](https://loading.io/css/).

## Repository Organization

* `frontend/` - source for the frontend of the native component demo
* `backend/` - wrapper around [YouTube's Search API](https://developers.google.com/youtube/v3/docs/search/) to prevent API key exposure

## Frontend Setup

1. Install [Node 20](https://nodejs.org/en) if you do not already have it (or use [nvm](https://github.com/nvm-sh/nvm)).
1. Clone this repository.
1. `cd` into the frontend folder.
1. Run `npm i`.
1. Run `npm run start`.

## Backend Setup

1. Sign up for the [Google Developers Console](https://console.developers.google.com/) if you do not have an account.
1. Create a project (or use the default one created for you).
1. Enable the [Youtube Data APIs](https://console.cloud.google.com/apis/library/youtube.googleapis.com).
1. In the Enabled Libraries section, add credentials to [Youtube's API](https://console.cloud.google.com/apis/api/youtube.googleapis.com/metrics).
1. For the Credential Type, create an API key.
1. Paste your key into the provided variable in the script in the `backend` folder.
1. Go to Cloudflare (or any other lambda provider).
1. Create a new Worker.
1. Paste the provided script (with your key) into the definition and deploy.
1. The provided URL should be placed at the top of the `search-base.ts` file in the `frontend/src/` folder.

## Backend API Details

The backend API is a simple POST endpoint that wraps YouTube's search API to limit expsoure of
authentication credentials.  The endpoint allows several parameters described below.

| Parameter Name | Type    | Purpose                                                          | Default Value | Possible Values                                                                 |
| -------------- | ------ | ---------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------- |
| maxResults     | number | Controls the number of results per page                          | 10            | 0 - 50                                                                          |
| order          | string | Determines the sort order                                        | relevance     | date(↑), rating(↑), relevance(↑), title(↓), videoCount(↑), viewCount(↑) |
| pageToken      | string | Allows the user to return to the previous page or go to the next |               |                                                                                 |
| published.min  | string | Limit search to videos published after a date                    |               | 1970-01-01T00:00:00Z                                                            |
| published.max  | string | Limit search to videos published before a date                   |               | 1970-01-01T00:00:00Z                                                            |
| query          | string | The video search criteria                                        |               |                                                                                 |
| safeSearch     | string | Whether safe search should be enabled during searching           | moderate      | moderate, none, strict                                                          |

> Note: The sort order for each term is limited by YouTube's API to the direction indicated.