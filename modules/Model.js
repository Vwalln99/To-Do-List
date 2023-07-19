export default function Model() {
    let _onToDoChange = () => {};
    let _todos = JSON.parse(localStorage.getItem("todo"));

    const getToDos = () => {
        return _todos;
    };

    const addToDo = (text) => {
        const todo = {
            id: _todos.length + 1,
            text,
            completed: false,
        };
        _todos.push(todo);
        _onToDoChange(_todos);
        updateLocalStorage();
    };

    let removeToDo = (id) => {
        _todos = _todos.filter((todo) => todo.id !== id);
        _onToDoChange(_todos);
        updateLocalStorage();
    };

    let editToDo = (id, text) => {
        _todos = _todos.map((todo) => {
            if (todo.id !== id) return todo;
            return { ...todo, text };
        });
        _onToDoChange(_todos);
        updateLocalStorage();
    };

    let toggleToDo = (id) => {
        _todos = _todos.map((todo) => {
            if (todo.id !== id) return todo;
            return { ...todo, completed: !todo.completed };
        });
        _onToDoChange(_todos);
        updateLocalStorage();
    };

    const bindToDoChange = (callback) => {
        _onToDoChange = callback;
    };

    const updateLocalStorage = () => {
        localStorage.setItem("todo", JSON.stringify(_todos));
    };

    return { addToDo, removeToDo, editToDo, toggleToDo, getToDos, bindToDoChange , updateLocalStorage};
}
