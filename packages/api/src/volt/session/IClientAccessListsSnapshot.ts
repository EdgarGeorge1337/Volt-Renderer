export interface ICreatableRoomModel
{
    readonly name: string;
    readonly tileSize: number;
    readonly width: number;
    readonly height: number;
    readonly clubLevel: number;
}

export interface IClientAccessListsSnapshot
{
    readonly chatStyleIds: ReadonlyArray<number>;
    /** Chat styles this account owns (AIR `SessionDataManager._purchasableChatStyles`). */
    readonly purchasableChatStyleIds: ReadonlyArray<number>;
    readonly roomModels: ReadonlyArray<ICreatableRoomModel>;
}
