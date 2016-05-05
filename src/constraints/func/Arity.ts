import * as Joi from "joi";
import {allowTypes} from "../../core";
import {getAndUpdateSchema} from "../../core";

export function Arity(n : number) : PropertyDecorator {
    return function (target: Object, propertyKey: string | symbol) : void {
        allowTypes(target, propertyKey, [Function]);

        getAndUpdateSchema(target, propertyKey, (schema : any) => {
            // TODO: add arity to Joi type definitions
            return schema.arity(n);
        });
    }
}