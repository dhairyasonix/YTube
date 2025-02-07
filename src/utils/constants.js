const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

const CROS_APIKEY = process.env.REACT_APP_CROS_APIKEY;
export const cros_URL = "https://educorssolver.host/api/getData?ApiKey=" + CROS_APIKEY + "&Target=";

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" + GOOGLE_API_KEY + "&q=";


export const YOUTUBE_COMMENTS = "https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCT7bqQYyuSUixL2z7CJfGWKz_A4o3vHwQ&textFormat=plainText&part=snippet&maxResults=20&videoId=";