import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../../interface/interface';
import { TreeNodeService } from '../../services/tree-node.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-node',
  templateUrl: './add-node-form.component.html',
  styleUrls: ['./add-node-form.component.scss'],
})
export class AddNodeFormComponent implements OnInit {
  @Input() node: any;
  treeNodeForm!: FormGroup;
  constructor(
    private treeNodeService: TreeNodeService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.treeNodeForm = this.fb.group({
      treeNodeName: ['', [Validators.required]],
    });
    this.treeNodeService.verifyValidation().subscribe((result) => {
      if (result === 'CHECK_FORM') {
        if (this.treeNodeForm?.valid) {
          this.treeNodeService.checkFormValid('FORM_VALID');
        }
      }
    });
  }
  toggleNode(): void {
    this.node.expanded = !this.node.expanded;
  }
  addChild(node: TreeNode) {
    this.treeNodeService.setNewNode(node);
  }
}
