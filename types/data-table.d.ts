import { FunctionComponent } from 'react';
import "./style.css";
interface IColumn {
    title: string;
    data: string;
}
interface IProps {
    data: any[];
    columns: IColumn[];
    listNbPerPage: number[];
}
declare const DataTableComponent: FunctionComponent<IProps>;
export type { IColumn, IProps };
export { DataTableComponent };
