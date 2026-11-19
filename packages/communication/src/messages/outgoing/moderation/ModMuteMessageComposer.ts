import { IMessageComposer } from '@volt/api';

export class ModMuteMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModMuteMessageComposer>>
{
    private _data: ConstructorParameters<typeof ModMuteMessageComposer>;

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
