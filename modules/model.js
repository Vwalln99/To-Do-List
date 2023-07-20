export default function Model() {
    let _onToDoChange = () => { };
    let _todos = JSON.parse(localStorage.getItem("todos")) || [];

    const pushtodos = (todos) => {
        _onToDoChange(todos);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const getToDos = () => _todos;

    const addToDo = (text) => {
        const todo = {
            id: _todos.length > 0 ? _todos[_todos.length - 1].id + 1 : 1,
            text,
            completed: false,
        };
        _todos.push(todo);
        pushtodos(_todos);
    };

    const removeToDo = (id) => {
        _todos = _todos.filter((todo) => todo.id !== id);
        pushtodos(_todos);
    };

    const editToDo = (id, text) => {
        _todos = _todos.map((todo) => {
            if (todo.id !== id) return todo;
            return { ...todo, text };
        });
        pushtodos(_todos);
    };

    const toggleToDo = (id) => {
        _todos = _todos.map((todo) => {
            if (todo.id !== id) return todo;
            return { ...todo, completed: !todo.completed };
        });
        pushtodos(_todos);
    };

    const bindToDoChange = (callback) => {
        _onToDoChange = callback;
    };


    return { addToDo, removeToDo, editToDo, toggleToDo, getToDos, bindToDoChange };
}
