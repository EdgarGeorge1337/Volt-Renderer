import { IMessageComposer } from '@volt/api';

export class DefaultSanctionMessageComposer implements IMessageComposer<ConstructorParameters<typeof DefaultSanctionMessageComposer>>
{
    private _data: ConstructorParameters<typeof DefaultSanctionMessageComposer>;

    constructor(userId: number, categoryId: number, message: string, issueId: number = -1)
    {
        // The classic client always writes the issue id as the last field, -1 included.
        this._data = [userId, categoryId, message, issueId];
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
