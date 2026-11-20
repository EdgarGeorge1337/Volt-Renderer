import { IMessageDataWrapper, IMessageParser } from '@volt/api';

/**
 * Follows a bot's chat line when its persona has an ElevenLabs voice id. Carries the voice id
 * and the exact text spoken; the client decides, per viewer, whether to fetch and play the
 * audio (the opt-in setting and the HTTP fetch both stay entirely client-side).
 */
export class BotVoiceLineParser implements IMessageParser
{
    private _unitId: number;
    private _voiceId: string;
    private _message: string;

    public flush(): boolean
    {
        this._unitId = null;
        this._voiceId = null;
        this._message = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._unitId = wrapper.readInt();
        this._voiceId = wrapper.readString();
        this._message = wrapper.readString();

        return true;
    }

    public get unitId(): number
    {
        return this._unitId;
    }

    public get voiceId(): string
    {
        return this._voiceId;
    }

    public get message(): string
    {
        return this._message;
    }
}
