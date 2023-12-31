var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type } from 'class-transformer';
import { IsDefined, MaxLength, MinLength } from 'class-validator';
export class Especialidad {
}
__decorate([
    Expose({ name: "especialidad" }),
    IsDefined({ message: () => { throw { status: 401, message: 'el parametro password es obligatorio' }; } }),
    MinLength(8, { message: () => { throw { status: 401, message: 'el nombre de la especialidad tiene min 8 caracteres' }; } }),
    MaxLength(30, { message: () => { throw { status: 401, message: 'el nombre de la especialidad tiene max 30 caracteres' }; } }),
    Type(() => String),
    __metadata("design:type", String)
], Especialidad.prototype, "esp_nombre", void 0);
