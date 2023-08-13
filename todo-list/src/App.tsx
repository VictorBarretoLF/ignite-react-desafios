import todoLogo from "./assets/todo-logo.svg";
import styles from "./styles.module.css";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodosInfo } from "./components/TodosInfo";
import { Icons } from "./components/Icons/icons";
import { Header } from "./components/Header";
import { useState } from "react";
import { TodosList } from "./components/TodosList";

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
					<TodosList todos={todos} />
				</section>
			</main>
		</div>
	);
}

export default App;
