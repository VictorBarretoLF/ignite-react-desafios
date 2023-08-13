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

	const deleteTodo = (id: string) => {
		const todoListWithoutDeltedTodo = todos.filter(
			(currentTodo) => currentTodo.id !== id
		);
		setTodos(todoListWithoutDeltedTodo);
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
					<TodosInfo todos={todos} />
					<TodosList todos={todos} deleteTodo={deleteTodo} />
				</section>
			</main>
		</div>
	);
}

export default App;
