export function fetchPopularRepos(language){
    const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

    return fetch(endpoint)
        // make request and return response to json 
        .then((res) => res.json())
        .then((data) => {
            //if not items 
            if(!data.items){
                // return an error, will add a catch since we cant update the user inside of here. Do it when we invoke function
                throw new Error(data.message)
            }

            return data.items
        })
}