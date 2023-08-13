import todoLogo from "./assets/todo-logo.svg";
import styles from "./styles.module.css";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodosInfo } from "./components/TodosInfo";
import { Icons } from "./components/Icons/icons";
import { Header } from "./components/Header";
import { useState } from "react";

export interface TodoItem {
	id: string;
	title: string;
	isCompleted: boolean;
}

function App() {
	const [todos, setTodos] = useState<TodoItem[]>([]);
	return (
		<div>
			<Header />

			<main
				style={{
					maxWidth: "46rem",
					padding: "0 1rem",
					margin: "0 auto",
				}}
			>
				<AddNewTodo />
				<section>
					<TodosInfo />

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
							<div className={styles.todo}>
								<button type="button" className={styles.todoCheckButton}>
									<div></div>
								</button>

								<p>
									Integer urna interdum massa libero auctor neque turpis turpis semper.
									Duis vel sed fames integer.
								</p>

								<button type="button" className={styles.deleteButton}>
									<Icons.trash />
								</button>
							</div>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
