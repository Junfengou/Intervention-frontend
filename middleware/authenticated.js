// Side note: Middleware only work on page level, don't try and put them inside the component

import Cookie from "js-cookie"

  //  This is the problem I'm facing right now
  // When the page is being refreshed, it takes about a second to fetch the information (jwt)
  // That triggers the application to think that there is no authenticated user during the time it take to fetch info
  // How do I get around that?

export default async function ({redirect}) {
  // This will call the store at the page level to check if the user is currently logged in
  

  if (!Cookie.get('jwt')) {
    return redirect('signin')
    // console.log("You should probably log in first");
  }


}
