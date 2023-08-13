import { Icons } from "../Icons/icons";
import styles from "./newtodo.module.css";

export function AddNewTodo() {
	return (
		<form action="" className={styles.addNewTodoForm}>
			<input
				placeholder="Adicione uma nova tarefa"
				type="text"
				className={styles.addNewTodoInput}
			/>
			<button className={styles.addNewTodoButton}>
				Criar <Icons.plus />
			</button>
		</form>
	);
}
