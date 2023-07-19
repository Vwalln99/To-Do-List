export default function Model() {
    let _onToDoChange = () => { };
    let _todos = [
        { id: 1, text: "learn javascript", completed: true },
        { id: 2, text: "seek for a job", completed: false },
    ];

    const getToDos = () => {
        console.log(_todos);
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
    };
    let removeToDo = (id) => {
       _todos =  _todos.filter(todo => todo.id !== id);
        console.log(_todos)
        _onToDoChange(_todos);
    };
    let editToDo = (id, text) => {
        _todos = _todos.map(todo => {
            if (todo.id !== id) return todo;
            return { ...todo, text };
        });
    };
    let toggleToDo = (id) => {
        _todos = _todos.map(todo => {
            if (todo.id !== id) return todo;
            return { ...todo, completed: !todo.completed };
        });
        _onToDoChange(_todos);
    };
    const bindToDoChange = (callback) => {
        _onToDoChange = callback;
    };
    return { addToDo, removeToDo, editToDo, toggleToDo, getToDos, bindToDoChange };
}