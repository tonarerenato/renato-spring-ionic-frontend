import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${Api_CONFIG.baseUrl}/categorias`);
    }

}