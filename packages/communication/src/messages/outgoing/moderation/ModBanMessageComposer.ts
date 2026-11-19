import { IMessageComposer } from '@volt/api';

export class ModBanMessageComposer implements IMessageComposer<ConstructorParameters<typeof ModBanMessageComposer>>
{
    public static readonly NO_ISSUE_ID = -1;

    private _data: ConstructorParameters<typeof ModBanMessageComposer>;

    constructor(userId: number, message: string, categoryId: number, banType: number, permanentBan: boolean, issueId: number = -1)
    {
        // The classic client always writes the issue id as the last field, -1 included.
        this._data = [userId, message, categoryId, banType, permanentBan, issueId];
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
