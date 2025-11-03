import { BasesView, Component, QueryController } from "obsidian";
import { getTasks } from "./util";
import { getAPI } from "obsidian-dataview";

export const TaskViewType = "tasks";

export class TaskView extends BasesView {
	containerEl: HTMLElement;
	readonly type = TaskViewType;

	constructor(controller: QueryController, parentEl: HTMLElement) {
		super(controller);
		this.containerEl = parentEl.createDiv('bases-task-view-container');
	}

	public onDataUpdated(): void {
		const tasks = [];
		for (const file of this.data.data) {
			const filePath = String(file.getValue("file.path"));
			if (!filePath) continue;
			tasks.push(...getTasks(filePath.slice(0, -3)));
		}

		this.containerEl.empty();
		console.log("Rendering tasks:", tasks);
		getAPI().taskList(tasks, false, this.containerEl, this);
	}
}
