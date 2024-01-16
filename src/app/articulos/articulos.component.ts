import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface ArticulosItem {
  id: number;
  name: string;
}

export const ELEMENT_DATA: ArticulosItem[] = [
  { id: 1, name: 'Rueda' },
  { id: 2, name: 'Ventana' },
  { id: 3, name: 'Faros' },
  { id: 4, name: 'Motor' },
  { id: 5, name: 'Freno' },
  { id: 6, name: 'Espejo retrovisor' },
  { id: 7, name: 'Batería' },
  { id: 8, name: 'Asiento' },
  { id: 9, name: 'Puerta' },
  { id: 10, name: 'Suspensión' },
  { id: 11, name: 'Radiador' },
  { id: 12, name: 'Transmisión' },
  { id: 13, name: 'Escape' },
  { id: 14, name: 'Limpiaparabrisas' },
  { id: 15, name: 'Aceite de motor' },
  { id: 16, name: 'Filtro de aire' },
  { id: 17, name: 'Caja de cambios' },
  { id: 18, name: 'Llave de tuercas' },
  { id: 19, name: 'Palanca de cambios' },
  { id: 20, name: 'Aire acondicionado' },
  // ...otros elementos
];

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  dataSource = new MatTableDataSource<ArticulosItem>(ELEMENT_DATA);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
