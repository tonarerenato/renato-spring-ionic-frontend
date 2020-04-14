import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Api_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CidadeService {

    constructor(public http: HttpClient) {
    }

    findAll(estado_id : string) : Observable<CidadeDTO[]>  {
        return this.http.get<CidadeDTO[]>(`${Api_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }
}