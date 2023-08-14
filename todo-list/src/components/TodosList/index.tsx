import { TodoItem } from "../../App";
import { Icons } from "../Icons/icons";
import styles from "./todoslist.module.css";

type Props = {
	todos: TodoItem[];
	deleteTodoById: (id: string) => void;
	markTodoAsChecked: (id: string) => void;
};

export function TodosList({ todos, deleteTodoById, markTodoAsChecked }: Props) {
	return (
		<div className={styles.todoList}>
			{todos.length === 0 ? (
				<section className={styles.todoEmptyList}>
					<Icons.clipboard width="3.5rem" height="3.5rem" />
					<div>
						<p className={styles.todoTextEmphasis}>
							Você ainda não tem tarefas cadastradas
						</p>
						<p>Crie tarefas e organize seus itens a fazer</p>
					</div>
				</section>
			) : (
				<>
					{/* TODO: create a component for the todo down bellow*/}
					{todos.map(({ id, title, isCompleted }) => (
						<div key={id} className={styles.todo}>
							<button
								type="button"
								className={styles.todoCheckButton}
								onClick={() => markTodoAsChecked(id)}
							>
								{isCompleted ? <Icons.checkCircle /> : <div></div>}
							</button>

							<p className={isCompleted ? styles.textCompleted : ""}>{title}</p>

							<button
								type="button"
								onClick={() => deleteTodoById(id)}
								className={styles.deleteButton}
							>
								<Icons.trash />
							</button>
						</div>
					))}
				</>
			)}
		</div>
	);
}
