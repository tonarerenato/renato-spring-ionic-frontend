import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Api_CONFIG } from "../../config/api.config";
import { PedidoDTO } from "../../models/pedido.dto";

@Injectable()
export class PedidoService {

    constructor(public http: HttpClient) {
    }

    insert(obj: PedidoDTO) {
        return this.http.post(
            `${Api_CONFIG.baseUrl}/pedidos`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}