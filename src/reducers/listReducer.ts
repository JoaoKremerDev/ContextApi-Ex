import { Item } from "@/app/types/Item";

type AddAction = {
    type: "add";
    payload: {
        text: string
    };
}

type EditTextAction = {
    type: "editText";
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: 'toggleDone';
    payload: {
        id: number
    };
}

type RemoveAction = {
    type: 'remove';
    payload: {
        id: number
    };
}

type ListActions = AddAction | EditTextAction | RemoveAction | ToggleDoneAction

export const listReducer = (list: Item[], action: ListActions) => {
    switch (action.type) {
        case 'add':
            return [
                ...list,
                {
                    id: list.length,
                    text: action.payload.text,
                    done: false
                }
            ];
        case 'editText':
            return list.map((t) => 
                t.id === action.payload.id 
                    ? { ...t, text: action.payload.newText }
                    : t
            );
        case 'toggleDone':
            return list.map((t) => 
                t.id === action.payload.id 
                    ? { ...t, done: !t.done }
                    : t
            );
        case 'remove':
            return list.filter(t => t.id !== action.payload.id);
        default:
            return list;
    }
};
