import React, {Component} from 'react';
import './App.css';
import TodoItem from "./components/todoItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.toDoItems = ['abc', 'def', 'ghi', 'klm']
    };

    render() {
        return (
            <div className="App">
                {this.toDoItems.map((item, index) =>
                    <TodoItem title={item} key={index}/>
                )}
            </div>
        );
    }


}

export default App;
