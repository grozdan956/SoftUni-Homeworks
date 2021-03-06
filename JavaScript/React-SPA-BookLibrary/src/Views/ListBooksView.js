import React,{Component} from "react";
export default class ListBooksView extends Component {


    render() {
        let bookRows = this.props.books.map(book =>
            <tr key={book._id}>
                <td>{book.Name}</td>
                <td>{book.Author}</td>
                <td>{book.description}</td>
                {this.getBookActions(book)}
            </tr>
        );

        return (
            <div className="books-view">
                <h1>Books</h1>
                <table className="books-table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bookRows}
                    </tbody>
                </table>
            </div>
        );
    }
    getBookActions(book) {
        if(book._acl.creator===sessionStorage.getItem("userId")){
            return ( <td>
                <button onClick={this.props.onEdit.bind(this, (book._id))}>Edit</button>
                <button onClick={this.props.onDelete.bind(this, (book._id))}>Delete</button>
            </td>)
        }else {
            return <td></td>;
        }
    }
}