import { TodoItem } from "../../App";
import { Icons } from "../Icons/icons";
import styles from "./todoslist.module.css";

type Props = {
	todos: TodoItem[];
};

export function TodosList({ todos }: Props) {
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
					{todos.map(({ id, title, isCompleted }) => (
						<div key={id} className={styles.todo}>
							<button type="button" className={styles.todoCheckButton}>
								{isCompleted ? <Icons.checkCircle /> : <div></div>}
							</button>

							<p>{title}</p>

							<button type="button" className={styles.deleteButton}>
								<Icons.trash />
							</button>
						</div>
					))}
				</>
			)}
		</div>
	);
}