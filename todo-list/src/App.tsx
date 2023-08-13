import todoLogo from "./assets/todo-logo.svg";
import styles from "./styles.module.css";
import { Icons } from "./components/icons";

function App() {
	return (
		<div>
			<header className={styles.header}>
				<img src={todoLogo} alt="todo logo" />
			</header>

			<div>
				<div>
					<form action="" className={styles.addNewTaskForm}>
						<input
							placeholder="Adicione uma nova tarefa"
							type="text"
							className={styles.addNewTaskInput}
						/>
						<button className={styles.addNewTaskButton}>
							Criar <Icons.plus />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
