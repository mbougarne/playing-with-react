import React, {useState} from 'react'

function AddBook()
{
    let [state, setState] = useState({
        title: '',
        author: '',
        ISBN: '',
        description: '',
        price: ''
    });

    // // Add Book
    const onAddBook = (e) => {
        e.preventDefault();
        console.log(state);
    }

    const onInputChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    return (
        <div className="row">
            <div className="col-12">
                <form onSubmit={onAddBook}>
                    <div className="card">
                        {/* Card Header */}
                        <div className="card-header">
                            <h3>ADD BOOK</h3>
                        </div>
                        {/* Card Body */}
                        <div className="card-body">
                            {/* Title */}
                            <div className="form-group row">
                                <label htmlFor="title">title</label>
                                <input type="text"
                                    id="title"
                                    className="form-control"
                                    name="title"
                                    value={state.title}
                                    onChange={onInputChange}/>
                            </div>
                            {/* Author */}
                            <div className="form-group row">
                                <label htmlFor="author">Author</label>
                                <input type="text"
                                    id="author"
                                    className="form-control"
                                    name="author"
                                    value={state.author}
                                    onChange={onInputChange}/>
                            </div>
                            {/* ISBN */}
                            <div className="form-group row">
                                <label htmlFor="isbn">ISBN</label>
                                <input type="text"
                                    id="isbn"
                                    className="form-control"
                                    name="ISBN"
                                    value={state.ISBN}
                                    onChange={onInputChange}/>
                            </div>
                            {/* Description */}
                            <div className="form-group row">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description"
                                    className="form-control"
                                    name="description"
                                    value={state.description}
                                    onChange={onInputChange}/>
                            </div>
                            {/* Price */}
                            <div className="form-group row">
                                <label htmlFor="price">price</label>
                                <input type="text"
                                    id="price"
                                    className="form-control"
                                    name="price"
                                    value={state.price}
                                    onChange={onInputChange}/>
                            </div>
                        </div>
                        {/* Card Footer */}
                        <div className="card-footer">
                            {/* Submit */}
                            <div className="form-group row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-lg btn-success">
                                        Add Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBook;