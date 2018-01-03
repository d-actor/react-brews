12/24 started project. cloned github starter and created account on brewerydb for API key. 

12/25-26 played with postman/API explorer on BreweryDB's site, messed with get request params.

12/28 picked up. add .env and BREWERYDB_API_KEY, then added .env file to .gitignore. Having trouble figuring out how to correctly make requests with API controllers/breweryDB gem, attempting to make axios.get requests just using react. Console error on loading beers: 
  "
    Failed to load https://api.brewerydb.com/v2/beers?styleId=30&key=4af975a27bc8afbf932b88f8f0c23929&format=json: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:5100' is therefore not allowed access.
  "
searching for solution, most of the anserws on stackoverflow are for node/angular/etc.
Switched back to just trying to use the rails controller, now getting a 500 internal server error.

12/29-30 figured out how to properly load data from API and got everything set up right right way with my .env file, got everything set up with redux. Basic styling/completion of part 1 for beers and breweries.

12/31-1/1 start working on pagination, set up client pagination and got results per page set to 12, installed react-infinite-scroller, started to get it set up using mixed redux/component state. Having trouble getting load func to trigger at the proper time, either doesn't load next page or loads too many.

1/2 played around a bit more with pagination, still getting stuck on the same things (getting client side/server side pagination to match up). hung up part 2 for a sec to move on to part 3.

created BeerView and BreweryView components and set up react routes and then links on main Beers/Breweries pages. Got some data and images showing on them and basic setup/styling.

now playing w home page and NoMatch. adding some fun custom images but more or less leaving as is css wise. using random beer endpoint to change home element from assingment details to beer spotlight. Went w react state on this with an axios call to the random api endpoint so that there is new random data on each page load. Tried to do the same with breweries, but as far as I can tell the brewery_db gem doesn't support random brewery API endpoints. Tried to just make an axios call to the API directly in the home component but I got an error involving headers and permissions. For now I am just going to leave as is and format to look good w just the beer spotlight.