import React, { Component } from "react";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text} [{item.time}]</li>
    }
    render() {
        var todoEntries = this.props.items;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};
export default TodoList;
