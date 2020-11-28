import React, { Component } from 'react' 

export default class Search extends Component {
    render({handleChange, handleClick} = this.props) {
        return (
            <div className="searchContainer">
                <span>Search</span>
                <input placeholder="Type your search" onChange={(e) => handleChange(e)}/>
                <div className="instockStyle" >
                    <input type="checkbox" onClick={(e) => handleClick(e)}/>
                    <span>Only show products in stock</span>
                </div>
                
            </div>
        )
    }
}
