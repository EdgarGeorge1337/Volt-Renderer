import { IMessageEvent } from '@volt/api';
import { MessageEvent } from '@volt/events';
import { BotVoiceLineParser } from '../../../../parser';

export class BotVoiceLineEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, BotVoiceLineParser);
    }

    public getParser(): BotVoiceLineParser
    {
        return this.parser as BotVoiceLineParser;
    }
}
