import { FurnitureBrandedImageVisualization } from './FurnitureBrandedImageVisualization';

export class FurnitureBBVisualization extends FurnitureBrandedImageVisualization
{
    protected getLayerXOffset(scale: number, direction: number, layerId: number): number
    {
        return super.getLayerXOffset(scale, direction, layerId) + this._offsetX;
    }

    protected getLayerYOffset(scale: number, direction: number, layerId: number): number
    {
        return super.getLayerYOffset(scale, direction, layerId) + this._offsetY;
    }

    protected getLayerZOffset(scale: number, direction: number, layerId: number): number
    {
        const offset = super.getLayerZOffset(scale, direction, layerId) + this._offsetZ;

        return this.isBrandedImageLayer(scale, layerId) ? offset + this._offsetZ : offset;
    }
}
