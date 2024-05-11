// import Airtable ,{Table} from "airtable";
// import { Console } from "console";
// import { url } from "inspector";
// import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
// import { NextRequest, NextResponse } from "next/server"

// const base = new Airtable({ apiKey: 'patxcurNRUmoDr1fJ.38e74d9cb6cdbe1c4c46d457f3d9b4514cddb6af8fb09e0e3446ffb9da9dbdff'}).base('appkSvToN2W2ScgdW');

// export const dynamic = 'force-dynamic' // defaults to auto


// export async function GET(request: Request,{params})  {
// // // NextRequest
// // console.log("params",params)
// const result =  await new Promise(async(resolve,reject)=>{
    
//     base('كل البيانات').find(params.id, function(err, record) {
//         console.log(record)
//         resolve(record)
//     });


 
// })
// // console.log(result)
// return NextResponse.json(result);
//        // console.log(tables)
// }


import Airtable ,{Table} from "airtable";
import { Console } from "console";
import { NextResponse } from "next/server"
var base = new Airtable({apiKey: 'patxcurNRUmoDr1fJ.38e74d9cb6cdbe1c4c46d457f3d9b4514cddb6af8fb09e0e3446ffb9da9dbdff'}).base('appkSvToN2W2ScgdW');

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request,{params})  {
const result =  await new Promise((resolve,reject)=>{


    base('كل البيانات').select({
        // Selecting the first 3 records in Grid view:
        // maxRecords: 50,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        
        records.forEach(function(record,s) {
            // console.log(s)
            // console.log(record._rawJson.id)
            // console.log(params.id)
            // console.log(record)
            // console.log(record)
            if(record.fields.ID == params.id) {resolve(record)} ;
            // console.log('Retrieved', record.get('Name'));
        });
    
//  resolve(records)       
    }, function done(err) {
        if (err) { console.error(err); return; }
    });

 
})
// console.log(result)
return NextResponse.json(result);
       console.log("tables")
}