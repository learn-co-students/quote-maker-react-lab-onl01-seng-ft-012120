export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state,action.quote]
    case "REMOVE_QUOTE":
       return state.filter(obj => obj.id !== action.quoteId)
    case "UPVOTE_QUOTE":
         let copyState = [...state]
         let quote = copyState.find(obj => obj.id === action.quoteId)
         let updatedQuote = {...quote, votes: quote.votes+1}
         let index = copyState.indexOf(quote)
         copyState.splice(index,1,updatedQuote)
          return copyState
    case "DOWNVOTE_QUOTE":
         let copyState2 = [...state]
         let quote2 = copyState2.find(obj => obj.id === action.quoteId)
         let newVotes
         quote2.votes > 0? newVotes = quote2.votes-1 : newVotes=quote2.votes
         let updatedQuote2 = {...quote2, votes: newVotes}
         let index2 = copyState2.indexOf(quote2)
         copyState2.splice(index2,1,updatedQuote2)
          return copyState2
    default:
      return state;
  }

 
}
