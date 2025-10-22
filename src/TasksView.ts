import { BasesPropertyId, BasesView, QueryController } from "obsidian";

export const TasksViewType = "tasks";

export class TasksView extends BasesView {
	type = TasksViewType;
	containerEl: HTMLElement;
	private includeCompletedProp: BasesPropertyId | null = null;
	private includeCompleted = false;

	constructor(controller: QueryController, scrollEl: HTMLElement) {
		super(controller);
	}

	onload(): void {

	}

	onunload() {

	}

	private async initializeTaskListView(): Promise<void> {

	}

	public onDataUpdated(): void {
		this.containerEl.removeClass('is-loading');
		this.loadConfig();
		void this.initializeMap().then(() => {
			if (this.map && this.data) {
				this.updateMarkers();
			}
		});
	}

	private loadConfig(): void {
		this.includeCompletedProp = this.config.getAsPropertyId('includeCompleted');

	}

	static getViewOptions() {
		return [{
			displayName: "Include Completed Tasks",
			type: "toggle",
			id: "includeCompleted",
			default: false,
		}];
	}

}
