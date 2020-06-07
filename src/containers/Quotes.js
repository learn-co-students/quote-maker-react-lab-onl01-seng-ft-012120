import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* {console.log(this.props)} */}
              {this.props.quotes.map((quote, index) => {
                return (
                  <QuoteCard
                    quote={quote}
                    key={index}
                    upvoteQuote={this.props.upvoteQuote}
                    downvoteQuote={this.props.downvoteQuote}
                    removeQuote={this.props.removeQuote}
                  />
                );
              })}
            {/* <QuoteCard /> */}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes

                
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const  mapStateToProps =(state) => {
  return { quotes: state.quotes }
}

//add arguments to connect as needed
export default connect(mapStateToProps,{upvoteQuote,downvoteQuote,removeQuote})(Quotes);
