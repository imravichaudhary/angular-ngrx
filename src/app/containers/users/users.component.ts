import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectUserList } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { Router } from '@angular/router';
import { GetUsers } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$  = this._store.pipe(select(selectUserList));

  constructor(private _store: Store<IAppState>, private _router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id]);
  }

}
