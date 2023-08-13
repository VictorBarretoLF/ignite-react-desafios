import todoLogo from "./assets/todo-logo.svg";
import styles from "./styles.module.css";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodosInfo } from "./components/TodosInfo";

function App() {
	return (
		<div>
			<header className={styles.header}>
				<img src={todoLogo} alt="todo logo" />
			</header>

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
				</section>
			</main>
		</div>
	);
}

export default App;
