import { IMessageComposer } from '@volt/api';

export class ModTradingLockMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModTradingLockMessageComposer>>
{
    private _data: ConstructorParameters<typeof ModTradingLockMessageComposer>;

    constructor(userId: number, message: string, lengthInSeconds: number, categoryId: number, issueId: number = -1)
    {
        // The classic client always writes the issue id as the last field, -1 included.
        this._data = [userId, message, lengthInSeconds, categoryId, issueId];
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
