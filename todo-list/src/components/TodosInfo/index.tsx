import { TodoItem } from "../../App";
import styles from "./todoinfo.module.css";

type Props = {
	todos: TodoItem[];
};

export function TodosInfo({ todos }: Props) {
	return (
		<header className={styles.TodoInfoHeader}>
			<div className={styles.todoInfo}>
				<p>Tarefas criadas</p>
				<span>{todos.length}</span>
			</div>

			<div className={styles.todoInfo}>
				<p className={styles.textPurple}>Concluídas</p>
				<span>0</span>
			</div>
		</header>
	);
}
