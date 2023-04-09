export function addNote(title, content){
    return {
        type: "ADD_NOTE",
        title: title,
        content: content,
    }
}

export function removeNote(id){
    return {
        type: "REMOVE_NOTE",
        id: id,
    }
}

export function editNote(id){
    return {
        type: "EDIT_NOTE",
        id: id,
        title: title,
        content: content,
    }
}