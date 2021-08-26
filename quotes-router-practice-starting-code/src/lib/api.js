const FIREBASE_DOMAIN = 'https://react-router-project-8eaaf-default-rtdb.firebaseio.com';

// export async function getAllQuotes() {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not fetch quotes.');
//   }

//   const transformedQuotes = [];

//   for (const key in data) {
//     const quoteObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedQuotes.push(quoteObj);
//   }

//   return transformedQuotes;
// }

// export async function getSingleQuote(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not fetch quote.');
//   }

//   const loadedQuote = {
//     id: quoteId,
//     ...data,
//   };

//   return loadedQuote;
// }

// export async function addQuote(quoteData) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
//     method: 'POST',
//     body: JSON.stringify(quoteData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not create quote.');
//   }

//   return null;
// }

// export async function addComment(requestData) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
//     method: 'POST',
//     body: JSON.stringify(requestData.commentData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not add comment.');
//   }

//   return { commentId: data.name };
// }

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not get comments.');
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// }


export const getAllQuotes = async () =>{
    const response= await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data= await response.json();
    if (!response.ok){
      throw new Error ("Can't Load Quotes!!");
    }

    const transformedQuotes=[]
    for (let key in data){
      const quote={
        id:key,
        ...data[key]
      };
      transformedQuotes.push(quote)
    }
    return transformedQuotes
}
export const getSingleQuote = async (quoteID) =>{
  const response= await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteID}.json`);
  const data= await response.json();
  if (!response.ok){
    throw new Error ("Quote details not found!!");
  }

  const quote={
    id:quoteID,
    ...data
  }
  return quote

}
export const addQuote = async (quoteData) =>{
  const response= await fetch(`${FIREBASE_DOMAIN}/quotes.json`,{
    method:'POST',
    body:JSON.stringify(quoteData),
    headers:{'Content-Type':'application/json'}
  });
  const data= await response.json();
  if (!response.ok){
    throw new Error ("Unable to add quote");
  }

  return null
}
export const addComment = async (commentObj) =>{
  const {quoteID,commentData}=commentObj
  const response= await fetch(`${FIREBASE_DOMAIN}/comments/${quoteID}.json`,{
    method:'POST',
    body:JSON.stringify(commentData),
    headers: {
            'Content-Type': 'application/json',
          },
  });
  const data= await response.json();
  if (!response.ok){
    throw new Error ("Unable to add comment");
  }
  return null
  }
export const getAllComments = async (quoteID) =>{
  const response= await fetch(`${FIREBASE_DOMAIN}/comments/${quoteID}.json`);
    const data= await response.json();
    if (!response.ok){
      throw new Error ("Can't Load Comments");
    }

    const transformedComments=[]
    for (let key in data){
      const comment={
        id:key,
        ...data

      }
      transformedComments.push(comment);
    }
  return transformedQuotes
}