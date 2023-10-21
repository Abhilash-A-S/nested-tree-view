import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { TreeJson } from '../../test-data/tree-json';
import { TreeNode } from '../../interface/interface';

import { AddNodePopupComponent } from '../add-node-popup/add-node-popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-material-tree-view',
  templateUrl: './material-tree-view.component.html',
  styleUrls: ['./material-tree-view.component.scss'],
})
export class MaterialTreeViewComponent implements OnInit {
  searchText: string = '';
  isCheckedAll: boolean = false;
  cloneData: any = [];

  private transformer = (node: TreeNode, level: number) => {
    return {
      level: level,
      showNode: true,
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      isChecked: node.isChecked,
      id: node.id,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener as any
  );

  constructor(public dialog: MatDialog) {
    this.dataSource.data = TreeJson.TREE_DATA;
    this.cloneData = [...this.dataSource.data];
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: any) => node.expandable;

  selectAllParents(treeData: any[]) {
    for (const node of treeData) {
      node.isChecked = true;
      if (node.children && node.children.length > 0) {
        this.selectAllParents(node.children);
      }
    }
    this.dataSource.data = [...this.dataSource.data];
    this.cloneData = [...this.dataSource.data];
  }
  searchTreeNode() {
    if (this.searchText) {
      this.dataSource.data = this.filterJson(
        JSON.parse(JSON.stringify(this.cloneData))
      );
    } else {
      this.dataSource.data = [...this.cloneData];
    }
  }
  filterJson(data: any) {
    return data.filter((item: any) => {
      if (item.name.toLowerCase().includes(this.searchText.toLowerCase())) {
        return true;
      }
      if (item.children && item.children.length > 0) {
        item.children = this.filterJson(item.children);
        if (item.children.length > 0) {
          return true;
        }
      }
      return false;
    });
  }
  openAddModel() {
    const dialogRef = this.dialog.open(AddNodePopupComponent, {
      width: '800px',
      height: '90vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource.data = this.dataSource.data.concat(result);
      this.cloneData = [...this.dataSource.data];
    });
  }
  deleteNode(node: TreeNode) {
    const treeNode = this.deleteItemById(this.dataSource.data, node.id);
    this.dataSource.data = treeNode;
    this.cloneData = [...this.dataSource.data];
  }
  deleteItemById(data: any, targetId: any) {
    return data.filter((item: any) => {
      if (item.id === targetId) {
        return false;
      }
      if (item.children && item.children.length) {
        item.children = this.deleteItemById(item.children, targetId);
        return true;
      }
      return true;
    });
  }
  editNode(node: TreeNode) {
    const editedNode = this.dataSource.data.find(
      (ele: any) => ele.id === node.id
    );
    const dialogRef = this.dialog.open(AddNodePopupComponent, {
      width: '800px',
      height: '90vh',
      data: editedNode,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.dataSource.data = JSON.parse(JSON.stringify(this.dataSource.data));
      this.cloneData = [...this.dataSource.data];
    });
  }
}
