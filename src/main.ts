import { Plugin, BasesViewFactory } from 'obsidian';
import { TaskBasesView, TaskBasesViewType } from './TaskBasesView';

export default class TaskBasesPlugin extends Plugin {
	async onload() {
		/* Register Task View */
		const viewFactory: BasesViewFactory = (controller, containerEl) => {
			return new TaskBasesView(controller, containerEl);
		}
		this.registerBasesView(TaskBasesViewType, {
			name: 'Dataview Tasks',
			icon: 'lucide-check-square',
			factory: viewFactory
		});
	}
}
