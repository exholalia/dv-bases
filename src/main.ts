import { Plugin, BasesViewFactory } from 'obsidian';
import { TaskView, TaskViewType } from './TaskView';

export default class DataviewBasesPlugin extends Plugin {

	async onload() {

		/* Register Task View */
		const viewFactory: BasesViewFactory = (controller, containerEl) => {
			return new TaskView(controller, containerEl);
		}
		this.registerBasesView(TaskViewType, {
			name: 'Dataview Tasks',
			icon: 'lucide-check-square',
			factory: viewFactory
		});
	}
}
