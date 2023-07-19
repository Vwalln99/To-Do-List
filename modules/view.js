export default function View() {
    const createElement = (tag, className) => {
        const element = document.createElement(tag);
        className && element.classList.add(className);
        return element;
    };

    const getElement = (selector) => {
        const element = document.querySelector(selector);
        return element;
    };

    const handleValue = () => {
        const input = getElement("input");
        const toDoText = () => input.value;
        const resetInput = () => (input.value = " ");
        return [toDoText, resetInput];
    };

    const bindAddToDo = (handler) => {
        const form = getElement("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const [toDoText, resetInput] = handleValue();
            handler(toDoText());
            resetInput();

        });
    }

    const configure = () => {
        const root = getElement("#root");
        const title = createElement('h1', "title");
        title.textContent = "To-Dos";
        const form = createElement("form");
        const input = createElement("input");
        input.type = "text";
        input.placeholder = "Add To-Do";
        input.name = "todo";
        const submitButton = createElement("button");
        submitButton.textContent = "Add"
        const toDoList = createElement("ul", "todo-list");
        form.append(input, submitButton);
        root.append(title, form, toDoList)
    };
    configure();

    const renderToDos = (todos) => {
        const toDoList = getElement(".todo-list");
        toDoList.innerHTML = "";
        if (todos.length === 0) {
            const message = createElement("p", "message");
            message.textContent = "You have no To-Do's today!";
            toDoList.append(message);
            return;
        } else {
            todos.forEach((todo) => {
                const listElement = createElement('li');
                listElement.id = todo.id;
                const checkbox = createElement('input');
                checkbox.type = "checkbox";
                checkbox.checkbox = todo.completed;
                const span = createElement('span', "editable");
                span.contentEditable = true;
                if (todo.completed) {
                    const strike = createElement("s");
                    strike.textContent = todo.text;
                    span.appendChild(strike);
                } else {
                    span.textContent = todo.text;
                }
                const deleteButton = createElement('button', "delete");
                deleteButton.textContent = "Delete";
                listElement.append(checkbox, span, deleteButton);
                toDoList.append(listElement);
            });
        }
    };

    return { createElement, getElement, renderToDos, bindAddToDo, handleValue };
}