import { slowHandleFilterLogic } from "../utils/slowLogic";
import { FilterOptions } from "./typedefs";

const filterOptions: FilterOptions = [
  { label: "All", value: "all" },
  { label: "Done", value: "done" },
  { label: "Undone", value: "undone" },
];

type TodoFilterPropsType = {
  filter: string;
  onClickFilter: Function;
};

export const TodoFilter = (props: TodoFilterPropsType) => {
  const { filter, onClickFilter } = props;

  const handledFilterOptions = slowHandleFilterLogic(filterOptions);

  return (
    <div className="toolbox">
      <div>
        {handledFilterOptions.map(({ label, value }) => {
          return (
            <span key={value}>
              <button
                className={
                  "anchor-button " + (filter === value ? "active" : "")
                }
                onClick={() => onClickFilter(value)}
              >
                {label}
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
};
