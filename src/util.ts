import { DataviewApi, getAPI } from "obsidian-dataview";

export function getTasks(filename: string, showCompleted: boolean): DataviewApi.TaskResult {
	const page = getAPI().page(filename);
	if (!page) {
		console.warn(`No page found for filename: ${filename}`);
		return []; // TODO: Handle missing page better?
	}

	const tasks = page.file.tasks;
	if (!showCompleted) {
		// @ts-ignore
		return tasks.where(t => !t.completed);
	}

	return tasks;
}
