export default function Controller(model, view){
    const onToDoChange=(todos)=>{
        view.renderToDos(todos)
    };
    onToDoChange(model.getToDos());
    const _handleAddToDo=(toDoText)=>{
        model.addToDo(toDoText);
    };
    const _handleRemoveToDo=(id)=>{
         model.removeToDo(id);
    };
    const _handleEditToDo=(id, text)=>{
        model.editToDo(id,text);
    };
    const _handleToggleToDo=(id)=>{
        model.toggleToDo(id);
    };
    
    view.bindAddToDo(_handleAddToDo);
    model.bindToDoChange(onToDoChange);
    
    return {};
}