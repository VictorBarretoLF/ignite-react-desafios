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

// TODO: MARK TODO AS CHECKED
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

	const deleteTodoById = (id: string) => {
		const todoListWithoutDeltedTodo = todos.filter(
			(currentTodo) => currentTodo.id !== id
		);
		setTodos(todoListWithoutDeltedTodo);
	};

	const markTodoAsChecked = (id: string) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					isCompleted: !todo.isCompleted,
				};
			}
			return todo;
		});
		setTodos(newTodos);
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
					<TodosList
						todos={todos}
						deleteTodoById={deleteTodoById}
						markTodoAsChecked={markTodoAsChecked}
					/>
				</section>
			</main>
		</div>
	);
}

export default App;
