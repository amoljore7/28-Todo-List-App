import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props;
        return (
            <React.Fragment>
                <div className="card card-body my-3">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">
                                    <i className="fas fa-book" />
                                </div>
                            </div>
                            <input
                                type="text"
                                className="form-control text-capitalize"
                                placeholder="add a todo item"
                                value={item}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!item}
                            className={
                                editItem ? "btn btn-block btn-success mt-3 " : "btn btn-block btn-primary mt-3"
                            }>
                            {editItem ? 'edit item' : 'add item'}
                        </button>

                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default TodoInput;