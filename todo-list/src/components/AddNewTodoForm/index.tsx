import { ChangeEvent, FormEvent, useState } from "react";
import { Icons } from "../Icons/icons";
import styles from "./newtodo.module.css";

type Props = {
	addNewTodo: (title: string) => void;
};

export function AddNewTodoForm({ addNewTodo }: Props) {
	const [title, setTitle] = useState("");

	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		addNewTodo(title);
		setTitle("");
	}

	function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
		setTitle(event.target.value);
	}

	return (
		<form onSubmit={handleSubmit} className={styles.addNewTodoForm}>
			<input
				placeholder="Adicione uma nova tarefa"
				type="text"
				value={title}
				className={styles.addNewTodoInput}
				onChange={onChangeTitle}
			/>
			<button type="submit" className={styles.addNewTodoButton}>
				Criar <Icons.plus />
			</button>
		</form>
	);
}
