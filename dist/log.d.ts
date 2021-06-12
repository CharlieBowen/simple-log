export declare type LogCondition = boolean | (() => boolean);
export declare type LogMethod = 'info' | 'warn' | 'error' | 'group' | 'groupEnd';
export interface LogMessage {
    color: string | undefined;
    payload: unknown[];
}
export declare class Log {
    private _tag;
    private _color;
    private messages;
    private _abort;
    constructor(tag?: string);
    static tag(tag: string): Log;
    log(method: LogMethod, ...payload: unknown[]): this;
    info(...payload: unknown[]): this;
    warn(...payload: unknown[]): this;
    error(...payload: unknown[]): this;
    static log(method: LogMethod, ...payload: unknown[]): Log;
    static info(...payload: unknown[]): Log;
    static warn(...payload: unknown[]): Log;
    static error(...payload: unknown[]): Log;
    color(color: string, ...payload: unknown[]): this;
    static color(color: string, ...payload: unknown[]): Log;
    red(...payload: unknown[]): this;
    pink(...payload: unknown[]): this;
    purple(...payload: unknown[]): this;
    deepPurple(...payload: unknown[]): this;
    indigo(...payload: unknown[]): this;
    blue(...payload: unknown[]): this;
    lightBlue(...payload: unknown[]): this;
    cyan(...payload: unknown[]): this;
    teal(...payload: unknown[]): this;
    green(...payload: unknown[]): this;
    lightGreen(...payload: unknown[]): this;
    lime(...payload: unknown[]): this;
    yellow(...payload: unknown[]): this;
    orange(...payload: unknown[]): this;
    deepOrange(...payload: unknown[]): this;
    static red(...payload: unknown[]): Log;
    static pink(...payload: unknown[]): Log;
    static purple(...payload: unknown[]): Log;
    static deepPurple(...payload: unknown[]): Log;
    static indigo(...payload: unknown[]): Log;
    static blue(...payload: unknown[]): Log;
    static lightBlue(...payload: unknown[]): Log;
    static cyan(...payload: unknown[]): Log;
    static teal(...payload: unknown[]): Log;
    static green(...payload: unknown[]): Log;
    static lightGreen(...payload: unknown[]): Log;
    static lime(...payload: unknown[]): Log;
    static yellow(...payload: unknown[]): Log;
    static orange(...payload: unknown[]): Log;
    static deepOrange(...payload: unknown[]): Log;
    text(...payload: unknown[]): this;
    static text(...payload: unknown[]): Log;
    space(): this;
    static space(): Log;
    group(label?: unknown, callback?: (log: Log) => void): this;
    groupEnd(): this;
    static group(name: unknown, callback?: (log: Log) => void): Log;
    static groupEnd(): Log;
    clear(): Log;
    if(condition: LogCondition, override?: boolean): this;
    ifProduction(): this;
    ifStaging(): this;
    ifDevelopment(): this;
    static if(condition: LogCondition): Log;
}
