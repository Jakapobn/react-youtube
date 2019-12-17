import React from 'react';


class SearchBar extends React.Component {

    state = { term: '' }

    onInputChange = event => {
        this.setState({ term: event.target.value })
    }

    onFormChange = event => {
        event.preventDefault();
        this.props.onFormChange(this.state.term)

        //* TODO: Make sure we call
        //* callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormChange} className="ui form">
                    <div className="filed">
                        <label>Video Search</label>
                        <input type="text" val={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;