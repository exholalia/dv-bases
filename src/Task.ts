import { BaseOption, BasesProperty, BasesPropertyType } from "obsidian";

export type DataviewPropertyType = BasesPropertyType | "task";
export const TaskPropertyType: DataviewPropertyType = "task";

export interface TaskProperty extends BasesProperty {
	DataviewPropertyType: typeof TaskPropertyType;
	name: string;
}

export interface TaskStatusOption extends BaseOption {
	type: "task-status";
	default?: string;
}

