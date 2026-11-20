import { IMessageComposer } from '@volt/api';

export class GetCfhSanctionMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetCfhSanctionMessageComposer>>
{
    private _data: ConstructorParameters<typeof GetCfhSanctionMessageComposer>;

    constructor(userId: number, topicId: number, issueId: number = -1)
    {
        // The classic client always asks with no issue (-1) from the mod action window.
        this._data = [issueId, userId, topicId];
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
