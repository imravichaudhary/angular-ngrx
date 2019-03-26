import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

}
