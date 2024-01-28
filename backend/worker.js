const GOOGLE_API_KEY = "YOUR_KEY_HERE";

async function searchYoutube(queryOptions) {
  let url = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet`;
  url += `&maxResults=${queryOptions.maxResults || 10}`;
  url += `&order=${queryOptions.order || 'relevance'}`;
  url += `&safeSearch=${queryOptions.safeSearch || 'moderate'}`;
  if(queryOptions.pageToken) {
    url += `&pageToken=${queryOptions.pageToken}`;
  }
  if(queryOptions.query) {
    url += `&q=${queryOptions.query}`;
  }
  if(queryOptions.published && queryOptions.published.min) {
    url += `&publishedAfter=${queryOptions.published.min}`;
  }
  if(queryOptions.published && queryOptions.published.max) {
    url += `&publishedBefore=${queryOptions.published.max}`;
  }
  return fetch(url, {
    method: "GET"
  }).then((resp) => resp.json());
};

async function getStatistics(videos) {
  const ids = videos.items.map(x => x.id.videoId);
  let url = `https://www.googleapis.com/youtube/v3/videos?key=${GOOGLE_API_KEY}&id=${ids.join(",")}&part=statistics`;
  return fetch(url, {
    method: "GET"
  }).then((resp) => resp.json())
  .then((data) => {
    for (const video of videos.items) {
      const stats = data.items.find(x => x.id === video.id.videoId);
      console.log(stats);
      video.statistics = stats?.statistics;
    }
    return videos;
  });
}

export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://native.ethantmcgee.com",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    };
    async function handleRequest(request2) {
      const body = await request.json();
      const response = await getStatistics(await searchYoutube(body));
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-type": "application/json",
          ...corsHeaders
        }
      });
    }
    async function handleOptions(request2) {
      return new Response(null, {
        headers: {
          ...corsHeaders,
        }
      });
    }
    if (request.method === "OPTIONS") {
      return handleOptions(request);
    } else if (request.method === "POST") {
      return handleRequest(request);
    } else {
      return new Response(null, {
        status: 405,
        statusText: "Method Not Allowed"
      });
    }
  }
};
