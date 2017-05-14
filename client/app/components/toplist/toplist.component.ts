import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'choosequiz',
    templateUrl: './app/components/toplist/toplist.component.html',
    styleUrls: ['./app/components/toplist/toplist.component.css']
})

export class ToplistComponent implements OnInit {

    error: any;

    constructor(
        private router: Router) { }

    ngOnInit() {
    }
    goBack() {
        window.history.back();
    }
}
