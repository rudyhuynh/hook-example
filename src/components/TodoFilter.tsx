type TodoFilterPropsType = {
  filter: string;
  onClickFilter: Function;
};

export const TodoFilter = (props: TodoFilterPropsType) => {
  const { filter, onClickFilter } = props;
  return (
    <div>
      <a
        className={filter == "all" ? "active" : ""}
        onClick={() => onClickFilter("all")}
      >
        All
      </a>
      &nbsp;
      <a
        className={filter == "done" ? "active" : ""}
        onClick={() => onClickFilter("done")}
      >
        Done
      </a>
      &nbsp;
      <a
        className={filter == "undone" ? "active" : ""}
        onClick={() => onClickFilter("undone")}
      >
        Undone
      </a>
    </div>
  );
};
