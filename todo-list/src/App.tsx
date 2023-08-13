import { AddNewTodoForm } from "./components/AddNewTodoForm";
import { TodosInfo } from "./components/TodosInfo";
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

	const addNewTodo = (title: string) => {
		setTodos([
			...todos,
			{
				id: crypto.randomUUID(),
				title: title,
				isCompleted: false,
			},
		]);
	};

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
				<AddNewTodoForm addNewTodo={addNewTodo} />
				<section>
					<TodosInfo />
					<TodosList todos={todos} />
				</section>
			</main>
		</div>
	);
}

export default App;
