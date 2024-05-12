import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly accessToken = of('AUJHF234810xxx');
}
