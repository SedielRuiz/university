export interface BaseOperation<T, U> {

    execute(parameters: T, headers?: any): U

}
