import { BasesView, QueryController, ToggleOption } from "obsidian";
import { getTasks } from "./util";
import { getAPI, DataviewApi } from "obsidian-dataview";

export const TaskBasesViewType = "tasks";

const dv: DataviewApi = getAPI();

export class TaskBasesView extends BasesView {
	containerEl: HTMLElement;
	readonly type = TaskBasesViewType;

	constructor(controller: QueryController, parentEl: HTMLElement) {
		super(controller);
		this.containerEl = parentEl.createDiv('bases-task-view-container');
	}

	public onDataUpdated(): void {
		const tasks = [];
		for (const file of this.data.data) {
			const filePath = String(file.getValue("file.path"));
			if (!filePath) continue;
			const fileName = filePath.replace(/\.([^.]+)$/, '');
			if (fileName.includes('.')) continue;
			tasks.push(...getTasks(fileName, this.config.get('show-completed-tasks') as boolean));
		}


		this.containerEl.empty();
		dv.taskList(tasks, false, this.containerEl, this);
	}

	public onConfigChanged(): void {
		this.onDataUpdated();
	}
}

const CompletedTasksOption: ToggleOption = {
	type: 'toggle',
	displayName: 'Show Completed Tasks',
	key: 'show-completed-tasks',
	default: true
};

export const TaskViewOptions = [CompletedTasksOption];
