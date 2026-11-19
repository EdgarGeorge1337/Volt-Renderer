import { IMessageComposer } from '@volt/api';

export class ModAlertMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModAlertMessageComposer>>
{
    private _data: ConstructorParameters<typeof ModAlertMessageComposer>;

    constructor(userId: number, message: string, categoryId: number, issueId: number = -1)
    {
        // The classic client always writes the issue id as the last field, -1 included.
        this._data = [userId, message, categoryId, issueId];
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
