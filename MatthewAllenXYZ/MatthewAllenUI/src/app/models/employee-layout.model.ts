import { TableColumns } from "./table-columns.model";

export interface EmployeeLayout {
    id?: number;
    name?: string;
    layout?: TableColumns[]
}