// export const token = () => {
//   const savedTokenIds = localStorage.getItem('saved_tokens')
//     ? JSON.parse(localStorage.getItem('saved_tokens'))
//     : [];

//   return savedTokenIds;
// };

// export const saveTokenIds  = (tokenIdArr) => {
//   if (tokenIdArr.length) {
//     localStorage.setItem('saved_tokens', JSON.stringify(tokenIdArr));
//   } else {
//     localStorage.removeItem('saved_tokens');
//   }
// };

// export const removeTokenId  = (tokenId) => {
//   const savedTokenIds = localStorage.getItem('saved_tokens')
//     ? JSON.parse(localStorage.getItem('saved_tokens'))
//     : null;

//   if (!savedTokenIds) {
//     return false;
//   }

//   const updatedSavedTokenIds  = savedTokenIds?.filter((savedTokenIds) => savedTokenIds !== tokenId);
//   localStorage.setItem('saved_tokens', JSON.stringify(updatedSavedTokenIds ));

//   return true;
// };
