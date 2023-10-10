import { FunctionComponent } from 'react';
/**
 * @property title nom de la colonne à afficher
 * @property data nom de la propriété du tableau data de IProps
 * @interface
 */
export interface IColumn {
    title: string;
    data: string;
}
/**
 * @property data - tableau de donnée avec des valeurs affichable sous forme de string
 * @property columns - tableau de IColumn contenant le nom de la propriété et le titre de la colonne
 * @property listNbPerPage - tableau contenant le nombre de page à afficher modifiable
 * @interface
 */
export interface IProps {
    data: any[];
    columns: IColumn[];
    listNbPerPage: number[];
}
/**
 * DataTableComponent : Composant réact pour afficher un tableau de donnée avec un système de tri et de pagination
 * @param props - propriétés react,
 * @param props.data - les données à afficher, paramètre sous forme de tableau d'objet,
 * @param props.columns - un tableau contenant la liste des propriétés de data à afficher en tant que colonne du tableau,
 * @param props.listNbPerPage - un paramètre obligatoire mais qui peut être vide pour utiliser les valeurs par défaut,
 * @returns FunctionComponent<IProps> - Composant React DataTableComponent
 */
declare const DataTableComponent: FunctionComponent<IProps>;
export { DataTableComponent };
