import { cellOptions } from "../board/Board";

interface Props {
  type: cellOptions;
}
function Cell({ type }: Props) {
  return <div className={`cell ${type}`} />;
}

export default Cell;
