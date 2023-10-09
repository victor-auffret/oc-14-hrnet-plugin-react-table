import { FunctionComponent } from 'react';
interface IColumn {
    title: string;
    data: string;
}
interface IProps {
    data: any[];
    columns: IColumn[];
    listNbPerPage: number[];
}
/**
 * DataTableComponent : Composant réact pour afficher un tableau de donnée avec un système de tri et de pagination
 * @param props
 *  - data : les données à afficher, paramètre sous forme de tableau d'objet
 *  - columns : un tableau contenant la liste des propriétés de data à afficher en tant que colonne du tableau
 *  - listNbPerPage : un paramètre optionnel qui est un tableau contenant les entiers symbolisant le nombre d'élément par page (par défaut on a 10, 25, 50 et 100 éléments par page au choix)
 * @returns Composant React DataTableComponent
 */
declare const DataTableComponent: FunctionComponent<IProps>;
export type { IColumn, IProps };
export { DataTableComponent };
