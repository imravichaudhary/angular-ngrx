import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { IConfig } from 'src/app/models/config.interface';
import { ConfigService } from './../../services/config.service';
import { GetConfig, EConfigActions, GetConfigSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

    constructor(
        private _configService: ConfigService,
        private _actions$: Actions
    ){}
}