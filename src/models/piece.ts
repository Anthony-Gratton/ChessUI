export abstract class Piece {
    color: string;
    hasMoved: boolean = false;
    abstract notation: string;
    abstract moves: number[][]
    abstract hasUnlimitedRange: boolean
    public constructor(color: string) {
        this.color = color;
    }




}