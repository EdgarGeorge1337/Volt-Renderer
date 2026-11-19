import { IMessageComposer } from '@volt/api';

export class ModMessageMessageComposer implements IMessageComposer<any>
{
    private _data: any[] = [];

    constructor(userId: number, message: string, categoryId: number, issueId: number = -1)
    {
        this._data.push(userId);
        this._data.push(message);
        this._data.push('');
        this._data.push('');
        this._data.push(categoryId);
        // The classic client always writes the issue id as the last field, -1 included.
        this._data.push(issueId);
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
