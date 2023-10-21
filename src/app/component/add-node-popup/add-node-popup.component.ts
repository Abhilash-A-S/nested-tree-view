import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TreeNode } from '../../interface/interface';
import { TreeNodeService } from '../../services/tree-node.service';
import { Constance } from '../../constance/constance';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-add-node-popup',
  templateUrl: './add-node-popup.component.html',
  styleUrls: ['./add-node-popup.component.scss'],
})
export class AddNodePopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddNodePopupComponent>,@Inject(MAT_DIALOG_DATA) public editNode: any,
    private treeNodeService: TreeNodeService
  ) {}
  public treeNodeList = {
    id: 199335,
    name: '',
    parentID: null,
    isChecked: true,
    showNode: true,
    expanded: true,
    children: [
      {
        id: 35848,
        name: '',
        parentID: 199335,
        isChecked: false,
        expanded: true,
        children: [],
      },
    ],
  };
  ngOnInit(): void {
    debugger;
    if (this.editNode) {
      this.treeNodeList = this.editNode;
    }
    this.treeNodeService.getNewNode().subscribe((node: TreeNode) => {
      if (this.treeNodeList.id == node.id) {
        this.treeNodeList.children = this.treeNodeList.children.concat(
          Constance.buildChildNode(node as any)
        );
      } else {
        this.addToChildNode(this.treeNodeList.children, node);
      }
    });
    this.treeNodeService.verifyValidation().subscribe((result) => {
      if (result === 'FORM_VALID') {
        const isExistEmptyNodeName = Constance.checkNodeNameAvailable(
          JSON.parse(JSON.stringify(this.treeNodeList.children))
        );
        if (this.treeNodeList.name && !isExistEmptyNodeName?.length) {
          this.dialogRef.close(this.treeNodeList);
        }
      }
    });
  }
  onClose(): void {
    this.dialogRef.close();
  }
  addToChildNode(treeNodeList: any[], node: TreeNode): void {
    for (let childItem of treeNodeList) {
      if (childItem.id === node.id) {
        childItem.children = childItem.children.concat(
          Constance.buildChildNode(node)
        );
      } else {
        this.addToChildNode(childItem.children, node);
      }
    }
  }
  addNewNode() {
    this.treeNodeService.checkFormValid('CHECK_FORM');
  }
}
