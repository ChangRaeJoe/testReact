import { type CSSProperties, useReducer, useState } from "react";

interface Pros {
  itemId: number;
  text: string;
  onDelete: (e: React.FormEvent<HTMLFormElement>, id: number) => void;
}

function Item({ itemId, text, onDelete }: Pros) {
  const itemstyle: CSSProperties = {
    display: "flex",
    justifyItems: "center",
    alignContent: "center",
    padding: "12px",
  };

  const spanStyle: CSSProperties = {
    flexGrow: 1,
  };

  return (
    <div>
      <form style={itemstyle} action="" onSubmit={(e) => onDelete(e, itemId)}>
        <input type="checkbox" name="completed" id={String(itemId)} />
        <label style={spanStyle} htmlFor={String(itemId)}>{text}</label>
        <input type="submit" value="Delete" />
      </form>
    </div>
  );
}

interface Action1 {
  name: "set" | "get";
  text: string;
}
interface Action2 {
  name: "remove";
  id: number;
}

type State = Map<number, { text: string }>;

function reducer(
  state: State,
  action: Action1 | Action2,
): State {
  const items: State = new Map<number, { text: string }>(state);

  switch (action.name) {
    case "set":
      items.set(items.size, { text: action.text });
      break;
    case "remove":
      items.delete(action.id);
      break;
    default:
      break;
  }
  return items;
}

export function Sub1() {
  const [input, setInput] = useState("");
  const [items, dispatch] = useReducer(
    reducer,
    new Map<number, { text: string }>(),
  );

  function handleInput(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (input == "") return;

    const data = {
      text: input,
      date: new Date().toLocaleString(),
      completed: false,
    };
    dispatch({ name: "set", text: data.text });
    setInput("");
  }
  //

  function handleDelete(e: React.FormEvent<HTMLFormElement>, id: number) {
    e.preventDefault();
    dispatch({ name: "remove", id: id });
  }
  //

  return (
    <>
      <form action="" onSubmit={handleInput}>
        <input
          type="text"
          placeholder="input..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type="submit" value="추가" />
      </form>
      <div className="list">
        {Array(...items).map(([k, v]) => {
          // return <div key={k}>{v.text}</div>;
          return (
            <Item key={k} itemId={k} text={v.text} onDelete={handleDelete}>
            </Item>
          );
        })}
      </div>
    </>
  );
}
