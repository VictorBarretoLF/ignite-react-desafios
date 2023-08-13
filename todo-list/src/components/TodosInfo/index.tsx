import { TodoItem } from "../../App";
import styles from "./todoinfo.module.css";

type Props = {
	todos: TodoItem[];
};

export function TodosInfo({ todos }: Props) {
	const allTodos = todos.length;
	const completedTodos = todos.filter((todo) => todo.isCompleted).length;

	return (
		<header className={styles.TodoInfoHeader}>
			<div className={styles.todoInfo}>
				<p>Tarefas criadas</p>
				<span>{allTodos}</span>
			</div>

			<div className={styles.todoInfo}>
				<p className={styles.textPurple}>Concluídas</p>
				<span>
					{allTodos === 0 && completedTodos == 0 ? (
						0
					) : (
						<>
							{completedTodos} de {allTodos}
						</>
					)}
				</span>
			</div>
		</header>
	);
}
