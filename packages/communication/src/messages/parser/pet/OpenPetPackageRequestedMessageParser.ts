import { IMessageDataWrapper, IMessageParser, PetFigureData } from '@volt/api';

export class OpenPetPackageRequestedMessageParser implements IMessageParser
{
    private _objectId: number;
    private _figureData: PetFigureData;

    flush(): boolean
    {
        this._objectId = -1;
        this._figureData = null;

        return true;
    }

    parse(wrapper: IMessageDataWrapper): boolean
    {
        this._objectId = wrapper.readInt();

        if(!wrapper.bytesAvailable) return true;

        this._figureData = new PetFigureData(this.readFigure(wrapper));

        return true;
    }

    // AIR reads the pet as type, palette, colour, breed and counted custom parts, then builds the figure string from them.
    private readFigure(wrapper: IMessageDataWrapper): string
    {
        const typeId = wrapper.readInt();
        const paletteId = wrapper.readInt();
        const color = wrapper.readString();
        wrapper.readInt();
        const parts: number[] = [];
        const count = wrapper.readInt();

        for(let i = 0; i < count; i++)
        {
            parts.push(wrapper.readInt(), wrapper.readInt(), wrapper.readInt());
        }

        return [typeId, paletteId, color, count, ...parts].join(' ');
    }

    public get objectId(): number
    {
        return this._objectId;
    }

    public get figureData(): PetFigureData
    {
        return this._figureData;
    }
}
