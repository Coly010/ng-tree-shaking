import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UsedService {
  constructor() {
    console.log("Used Service");
  }
}
