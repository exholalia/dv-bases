import { DataviewApi, getAPI } from "obsidian-dataview";

export function getTasks(filename: string): DataviewApi.TaskResult {
	const page = getAPI().page(filename);
	if (!page) {
		return []; // TODO: Handle missing page better?
	}

	return page.file.tasks;
}
