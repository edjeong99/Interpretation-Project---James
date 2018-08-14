export const FetchUtil = {
    // bind: function (delay, id, action) {
    searchById( id, returnFunc ) {
 //       console.log("searchById  id = " + id);

        fetch('http://localhost:3000/interpretations.json')
        .then(response => response.json())
        .then( jasonData => {
            // for loop to match id
            for (var i=0; i < jasonData.interpretations.length; i++){
                if (id === jasonData.interpretations[i].id){
                    console.log ("fetchUtil.js  match found  id = " + jasonData.interpretations[i].id);
                    returnFunc( jasonData.interpretations[i]);
                    //return jasonData.interpretations[i];
                    
                }
            }
          });
            

          
        },

  // Below will return list of authors and number of entry for each authors.     
  // use return function instead of return

    retrieveTopAuthors(returnFunc){
        let topAuthors = [];
        let found = false;

        fetch('http://localhost:3000/interpretations.json')
        .then(response => response.json())
        .then( jasonData => {
// find list of authors with counting
            for (let i=0; i < jasonData.interpretations.length; i++){  
                found = false;
            
                for (let j=0 ; j < topAuthors.length; j++ ){
                    if (topAuthors[j].name === jasonData.interpretations[i].user.name){
                        topAuthors[j].count++;
                        found = true;
                         break;
                    }
                }
                
                if (!found){
                        topAuthors.push({name : jasonData.interpretations[i].user.name, count : 1});
                 }  
            }
    //        console.log("fetchUtil.js after loop  final author list--> " + topAuthors);
          
           // sort the listing
            topAuthors.sort(function(a, b) {
              return b.count - a.count;
            });
        
            returnFunc(topAuthors);

        });  

    },
           


 // Below will return list of authors and number of entry for each authors.     
  // use return function instead of return

    retrievetopCommentators(returnFunc){
        let topCommentators = [];
        let found = false;

        fetch('http://localhost:3000/interpretations.json')
        .then(response => response.json())
        .then( jasonData => {
// find list of authors with counting
            for (let i=0; i < jasonData.interpretations.length; i++){  
                found = false;
               
                if(jasonData.interpretations[i].comments !== null && jasonData.interpretations[i].comments !== undefined){
                    //  console.log("retrieveTopCommentator.js 1st LOOP--> " + i + "  " + jasonData.interpretations[i].comments);
                    //  console.log( jasonData.interpretations[i].comments);

                     for (let j = 0; j < jasonData.interpretations[i].comments.length; j++){
                         
                        topCommentators.forEach(function (commentator){
                            // console.log(commentator + "  "+ jasonData.interpretations[i].comments[j].user.name);

                                if (commentator.name === jasonData.interpretations[i].comments[j].user.name ){
                                    commentator.count++;
                                    found = true;
                                    // console.log("retrieveTopCommentator.js interpre name MATCHED--> " + commentator.name);

                                }
                            });
                    
                        if (!found){
                                topCommentators.push({name : jasonData.interpretations[i].comments[j].user.name, count : 1});
                                // console.log("fetchUtil.js interpre new name added--> " + jasonData.interpretations[i].comments[j].user.name);
                        }  
                    }
                }    
                // else{
                //     console.log("retrieveTopCommentator.js NULL or UNDEFINED");
                //     console.log(jasonData.interpretations[i]);
                // }
            }
       //     console.log("retrieveTopCommentator.js after loop  final topCommentators list--> " + topCommentators);
            
           // sort the listing
            topCommentators.sort(function(a, b) {
              return b.count - a.count;
            });
        
            returnFunc(topCommentators);

        });  

    },



};






export const dateUtil = {
    formatDateYYYYMMDD(date, separator) {
        let monthStr = (date.getMonth() + 1).toString();
        monthStr = (monthStr[1]) ? monthStr : `0${monthStr[0]}`;

        let dateStr = date.getDate().toString();
        dateStr = (dateStr[1]) ? dateStr : `0${dateStr[0]}`;

        return `${date.getFullYear()}${separator}${monthStr}${separator}${dateStr}`;
    },
    formatDateMMDDYYYY(date, separator) {
        let monthStr = (date.getMonth() + 1).toString();
        monthStr = (monthStr[1]) ? monthStr : `0${monthStr[0]}`;

        let dateStr = date.getDate().toString();
        dateStr = (dateStr[1]) ? dateStr : `0${dateStr[0]}`;

        return `${monthStr}${separator}${dateStr}${separator}${date.getFullYear()}`;
    },
};

export const restUtil = {
    getUrlBase_Formatted( d2 ) {        
        let url = d2.Api.getApi().baseUrl.replace( '/api', '' );
        const lastChar = url.substring( url.length - 1 );

        if ( lastChar === '/' ) url = url.substring( 0, url.length - 1 )

        return url;
    },
    
    requestGetHelper(d2Api, url, successFunc) {
        d2Api.get(url).then(result => {
            successFunc(result);
        });
    },
    requestPostHelper(d2Api, url, value, successFunc, returnContentType) {
        const returnContType = (returnContentType === undefined) ? 'text/plain' : returnContentType;
        restUtil.requestHelper(d2Api, url, value, successFunc, 'POST', returnContType);
        /*d2Api.post(url, value, { contentType: 'text/plain' })
            .then(successFunc)
            .catch(errorResponse => {
                console.log(errorResponse);
            });
        */
    },
    requestHelper(d2Api, url, value, successFunc, requestType, returnContentType) {
        const reqType = (requestType === undefined) ? 'POST' : requestType;
        const returnContType = (returnContentType === undefined) ? 'text/plain' : returnContentType;
        d2Api.request(reqType, url, value, { contentType: returnContType })
        .then(successFunc)
        .catch(errorResponse => {
            console.log(errorResponse);
        });
    },
};

export const dhisUtils = {
    getMatchingApiObjTypeName( dataType ) {
        let dhisApiObjName = '';
        if (dataType === 'REPORT_TABLE') {
            dhisApiObjName = 'reportTables';
        } else if (dataType === 'CHART') {
            dhisApiObjName = 'charts';
        } else if (dataType === 'MAP') {
            dhisApiObjName = 'maps';
        } else if (dataType === 'EVENT_REPORT') {
            dhisApiObjName = 'eventReports';
        } else if (dataType === 'EVENT_CHART') {
            dhisApiObjName = 'eventCharts'; // Event chart
        }

        return dhisApiObjName;
    },
};


export default FetchUtil