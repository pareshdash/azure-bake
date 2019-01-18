import { IBakeConfig, IIngredient, IBakeRegion} from "./bake-interfaces";
import {Logger} from './logger'
import {DeploymentContext} from './deployment-context'
import * as colors from 'colors'

export class BaseIngredient {

    constructor(name: string, ingredient: IIngredient, ctx: DeploymentContext) {

        this._ctx = new DeploymentContext(ctx.AuthToken, ctx.Package, ctx.Region, ctx.Logger,ingredient)
        this._name = name
        this._ingredient = ingredient
        this._logger = new Logger(ctx.Logger.getPre().concat(name))
        this._logger.log('adding ingredient type[' + colors.cyan(ingredient.properties.type) +'] source[' + colors.cyan(ingredient.properties.source.value(ctx)) + ']')
    }

    _ctx: DeploymentContext
    _logger: Logger
    _ingredient: IIngredient
    _name: string

    public async Execute(): Promise<void> {
    }

}