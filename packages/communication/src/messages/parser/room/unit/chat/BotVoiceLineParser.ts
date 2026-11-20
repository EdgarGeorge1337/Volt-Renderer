import { IMessageDataWrapper, IMessageParser } from '@volt/api';

/**
 * Follows a bot's chat line when its persona has an ElevenLabs voice id. Carries the voice id,
 * the exact text spoken, and whether the bot is player-owned; the client decides, per viewer,
 * whether to fetch and play audio and which voice path to use (the opt-in setting and the HTTP
 * fetch both stay entirely client-side). `playerOwned` false means a hotel staff/world bot
 * (Guide, Barista, Concierge, Gardener, Merchant, DJ, dealer, Pixel, etc.) - those always use the
 * client's free browser voice (window.speechSynthesis), never ElevenLabs/the bridge, because no
 * one but the bot's own owner pays for synthesis. `playerOwned` true means a rentable/MCP bot
 * whose owner may have their own ElevenLabs key; the client tries that first and falls back to
 * the free browser voice.
 */
export class BotVoiceLineParser implements IMessageParser
{
    private _unitId: number;
    private _voiceId: string;
    private _message: string;
    private _playerOwned: boolean;

    public flush(): boolean
    {
        this._unitId = null;
        this._voiceId = null;
        this._message = null;
        this._playerOwned = null;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._unitId = wrapper.readInt();
        this._voiceId = wrapper.readString();
        this._message = wrapper.readString();
        this._playerOwned = wrapper.readBoolean();

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

    /** False for a hotel staff/world bot (free browser voice only); true for a player-owned bot
     * (rentable/MCP) whose owner may have their own ElevenLabs key. */
    public get playerOwned(): boolean
    {
        return this._playerOwned === true;
    }
}
