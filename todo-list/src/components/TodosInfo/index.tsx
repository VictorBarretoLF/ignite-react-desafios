import styles from "./todoinfo.module.css";

export function TodosInfo() {
	return (
		<header className={styles.TodoInfoHeader}>
			<div className={styles.todoInfo}>
				<p>Tarefas criadas</p>
				<span>0</span>
			</div>

			<div className={styles.todoInfo}>
				<p className={styles.textPurple}>Concluídas</p>
				<span>0</span>
			</div>
		</header>
	);
}
